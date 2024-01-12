import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {BrandsService} from './brands.service';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {Brand} from './brands.model';

@Controller('brands')
export class BrandsController {

    constructor(private brandsService: BrandsService) {}

    @ApiOperation({summary: 'Create brand'})
    @ApiResponse({status: 201, type: Brand})
    @Post()
    create(@Body() brandDto: CreateBrandDto) {
        return this.brandsService.create(brandDto)
    }

    @ApiOperation({summary: 'Get all brands'})
    @ApiResponse({status: 200, type: [Brand]})
    @Get()
    getAll() {
        return this.brandsService.getAll()
    }

    @ApiOperation({summary: 'Get one brand by name'})
    @ApiResponse({status: 200, type: Brand})
    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.brandsService.getOne(id)
    }

    @ApiOperation({summary: 'Delete brand'})
    @ApiResponse({status: 200, type: Brand})
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.brandsService.delete(id)
    }
}
