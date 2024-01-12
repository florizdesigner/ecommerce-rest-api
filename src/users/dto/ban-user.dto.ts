import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 'Fraud', description: 'Description of ban user' })
  @IsString({ message: 'Ban reason must be a string' })
  readonly banReason: string;

  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'UserID must be a number' })
  readonly userId: number;
}
