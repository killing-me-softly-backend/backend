import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import * as _ from 'lodash';
import { Model } from 'mongoose';
import { CreateUserDto } from './create.user.dto';
import { UserDto, UserWithoutPasswordDto } from './user.dto';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPasswordDto> {
    if (_.isNil(createUserDto))
      throw new BadRequestException('cannot create empty user');
    if (_.isNil(createUserDto?.username))
      throw new BadRequestException('missing username');
    if (_.isNil(createUserDto?.password))
      throw new BadRequestException('missing password');
    const password = await hash(createUserDto.password, 10);
    const user = await this.findOne(createUserDto.username);
    if (user) throw new BadRequestException('username already exists');
    const res = await this.userModel.create({
      isAdmin: false,
      ...createUserDto,
      password,
    });

    const userJson = res.toJSON();
    delete userJson.password;
    return userJson as UserDto;
  }

  async findAll(): Promise<UserDto[]> {
    return (await this.userModel.find().exec()).map((x) => {
      return x.toJSON();
    });
  }

  async findOne(username: string): Promise<UserDto | undefined> {
    const user = await this.userModel.findOne({ username }).exec();
    if (!user) return undefined;
    return user.toJSON<UserDto>();
  }

  async delete(username: string): Promise<UserDto> {
    const deletedUser = await this.userModel
      .findOneAndRemove({ username })
      .exec();
    if (!deletedUser) throw new BadRequestException('user doesnt exists');
    return deletedUser.toJSON<UserDto>();
  }
}
