import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from '../users/users.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isPasswordsMatch = await compare(pass, user.password);
    if (user && isPasswordsMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      username: user.username,
      sub: user.id,
      isAdmin: user.isAdmin,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
