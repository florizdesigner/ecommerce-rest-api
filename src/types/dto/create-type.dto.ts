import {IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateTypeDto {
    @ApiProperty({example: 'Sneakers', description: 'Type name of clothing / shoes'})
    @IsString({message: "Must be string"})
    readonly type: string;
}