import { Injectable } from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {InjectModel} from '@nestjs/sequelize';
import {Brand} from './brands.model';

@Injectable()
export class BrandsService {
    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

    async create(dto: CreateBrandDto) {
        return await this.brandRepository.create(dto);
    }

    async getAll() {
        return await this.brandRepository.findAll()
    }

    async getOne(id: number) {
        return await this.brandRepository.findOne({rejectOnEmpty: undefined, where: {id}})
    }

    async delete(id: number) {
        return await this.brandRepository.destroy({where: {id}})
    }
}
