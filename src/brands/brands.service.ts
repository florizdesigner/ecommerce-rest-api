import {Injectable, Logger} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {InjectModel} from '@nestjs/sequelize';
import {Brand} from './brands.model';
import {ValidationException} from '../exceptions/validation.exception';
import {timestamp} from 'rxjs';

@Injectable()
export class BrandsService {
    private readonly logger = new Logger(BrandsService.name)

    constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

    public async create(dto: CreateBrandDto) {
        const brand = await this.brandRepository.findOne({rejectOnEmpty: undefined, where: {brand: dto.brand}})
        this.logger.log(timestamp(), brand)

        if (brand) {
            throw new ValidationException('User already exist')
        }

        return await this.brandRepository.create(dto);
    }

    public async getAll() {
        return await this.brandRepository.findAll()
    }

    public async getOne(id: number) {
        return await this.brandRepository.findOne({rejectOnEmpty: undefined, where: {id}})
    }

    public async delete(id: number) {
        return await this.brandRepository.destroy({where: {id}})
    }
}
