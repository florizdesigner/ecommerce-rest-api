import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.ru', description: 'User e-mail' })
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '123456qwerty', description: 'User password' })
  @IsString({ message: 'Must be string' })
  @Length(8, 25, {
    message: 'Specify at least 8 and no more than 25 characters',
  })
  readonly password: string;
}
