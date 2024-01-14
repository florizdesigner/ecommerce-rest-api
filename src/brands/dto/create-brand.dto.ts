import {IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateBrandDto {
    @ApiProperty({example: 'Timberland', description: "Name of brand"})
    @IsString({message: "Must be string"})
    readonly brand: string;
}