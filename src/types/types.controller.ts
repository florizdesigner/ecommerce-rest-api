import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';

import {TypesService} from './types.service';
import {CreateTypeDto} from './dto/create-type.dto';
import {Type} from './types.model';

@ApiTags('Types')
@Controller('types')
export class TypesController {
    constructor(private typesService: TypesService) {}

    @ApiOperation({summary: 'Create type'})
    @ApiResponse({status: 201, type: Type})
    @Post()
    create(@Body() typesDto: CreateTypeDto){
        return this.typesService.createBrand(typesDto)
    }

    @ApiOperation({summary: 'Get all types'})
    @ApiResponse({status: 201, type: [Type]})
    @Get()
    getAll() {
        return this.typesService.getAllBrands()
    }

    @ApiOperation({summary: 'Get one types by id'})
    @ApiResponse({status: 201, type: Type})
    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.typesService.getOneBrand(id)
    }

    @ApiOperation({summary: 'Delete type'})
    @ApiResponse({status: 200, type: [Type]})
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.typesService.deleteBrand(id)
    }
}
