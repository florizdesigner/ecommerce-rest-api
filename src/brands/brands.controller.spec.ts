import {BrandsController} from './brands.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {Brand} from './brands.model';
import {BrandsService} from './brands.service';

describe('BrandsController', () => {
    let controller: BrandsController

    let requestMock = {

    }

    let responseMock = {

    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BrandsController],
            providers: [BrandsService]
        }).compile()

        controller = module.get<BrandsController>(BrandsController)
    })

    it('Should be defined', () => {
        expect(controller).toBeDefined()
        // const res = expect(controller.create({brand: 'Uniqlo'})).toBeInstanceOf(Brand)
        // console.log(res)
        expect(controller.getOne(5))
        expect(controller.getAll()).toBe(Promise<Brand[]>)
        // expect(controller.delete())
    })
})