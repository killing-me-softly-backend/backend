import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { IsAdminGuard } from '../auth/is.admin.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './create.user.dto';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }

  @UseGuards(IsAdminGuard)
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':username')
  async findOne(@Param('username') username: string): Promise<UserDto> {
    return this.usersService.findOne(username);
  }

  @UseGuards(IsAdminGuard)
  @Delete(':id')
  async delete(@Request() req: { user: UserDto }, @Param('id') id: string) {
    const isAdmin = req?.user?.isAdmin;
    if (!isAdmin) throw UnauthorizedException;
    return this.usersService.delete(id);
  }
}
