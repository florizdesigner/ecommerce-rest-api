import {Column, DataType, Table, Model, BelongsToMany} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {BrandTypes} from '../types/brand-types.model';
import {Type} from '../types/types.model';

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

    @BelongsToMany(() => Type, () => BrandTypes)
    roles: Type[];
}