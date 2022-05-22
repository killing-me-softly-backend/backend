export interface UserDto {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface UserWithoutPasswordDto extends Omit<UserDto, 'password'> {}
