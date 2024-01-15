import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateBrandDto} from './dto/create-brand.dto';
import {BrandsService} from './brands.service';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';
import {Brand} from './brands.model';
import {Throttle} from '@nestjs/throttler';

@Controller('brands')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

    @Throttle({ default: { limit: 3, ttl: 60000 }})
    @ApiOperation({summary: 'Create brand'})
    @ApiResponse({status: 201, type: Brand})
    @Post()
    create(@Body() brandDto: CreateBrandDto) {
        return this.brandsService.create(brandDto)
    }

    @ApiOperation({summary: 'Get all brands'})
    @ApiResponse({status: 200, type: [Brand]})
    @Throttle({ default: { limit: 3, ttl: 60000 }})
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
    @ApiResponse({status: 200, type: Number, description: '1 = Successfully deleted; 0 = Nothing delete'})
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.brandsService.delete(id)
    }
}
