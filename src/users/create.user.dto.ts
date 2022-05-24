export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly phone: string;
  readonly address: string;
  readonly number_of_children: number;
  readonly relationship_time: number;
  readonly age: number;
  isAdmin?: boolean;
}
