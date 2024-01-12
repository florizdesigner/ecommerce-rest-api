import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'developer', description: 'Role' })
  @IsString({ message: 'Role must be string' })
  readonly value: string;

  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'UserID must be number' })
  readonly userId: number;
}
