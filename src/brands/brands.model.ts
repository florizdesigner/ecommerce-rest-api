import {Column, DataType, Table, Model} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';

interface BrandCreationAttrs {
    brand: string;
}

@Table({tableName: 'brands'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
    @ApiProperty({example: 1, description: 'ID of brand'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

    @ApiProperty({example: 'Tibmerland', description: 'Name of brand'})
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    brand: string
}