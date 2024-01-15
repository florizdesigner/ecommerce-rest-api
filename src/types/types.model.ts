import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import {Brand} from '../brands/brands.model';
import {BrandTypes} from './brand-types.model';

interface TypeCreationAttrs {
    type: string;
}

@Table({ tableName: 'types' })
export class Type extends Model<Type, TypeCreationAttrs> {
    @ApiProperty({ example: 1, description: 'Type ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Sneakers', description: 'Type of clothing / shoes' })
    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    type: string;

    @BelongsToMany(() => Brand, () => BrandTypes)
    roles: Brand[];
}
