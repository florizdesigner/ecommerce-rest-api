import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import {Brand} from '../brands/brands.model';
import {Type} from './types.model';

@Table({ tableName: 'brand-types', createdAt: false, updatedAt: false })
export class BrandTypes extends Model<BrandTypes> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Brand)
    @Column({ type: DataType.INTEGER })
    brandId: number;

    @ForeignKey(() => Type)
    @Column({ type: DataType.INTEGER })
    typeId: number;
}
