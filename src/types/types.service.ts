import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Type} from './types.model';
import {CreateTypeDto} from './dto/create-type.dto';
import {ValidationException} from '../exceptions/validation.exception';

@Injectable()
export class TypesService {
    constructor(@InjectModel(Type) private typeRepository: typeof Type) {
    }

    async createBrand(dto: CreateTypeDto) {
        const findType = await this.typeRepository.findOne({rejectOnEmpty: undefined, where: {type: dto.type}})

        if(findType) {
            throw new ValidationException("Type already exist")
        }

        return await this.typeRepository.create(dto)
    }

    async getAllBrands() {
        return await this.typeRepository.findAll()
    }

    async getOneBrand(id: number) {
        return await this.typeRepository.findOne({rejectOnEmpty: undefined, where: {id}})
    }

    async deleteBrand(id: number) {
        return await this.typeRepository.destroy({where: {id}})
    }
}