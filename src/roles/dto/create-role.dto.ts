import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Role name' })
  @IsString({ message: 'Role name must be a string' })
  readonly value: string;

  @ApiProperty({ example: 'Administrator', description: 'Description of role' })
  @IsString({ message: 'Role description  must be a string' })
  readonly description: string;
}
