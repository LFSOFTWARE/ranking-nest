import { Put, Query, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { CreateDesafioDto } from './dto/create-desafio.dto';
import { UpdateDesafioDto } from './dto/update-desafio.dto';

@Controller('api/v1/desafios')
export class DesafiosController {
  constructor(private readonly desafiosService: DesafiosService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createDesafioDto: CreateDesafioDto) {
    return await this.desafiosService.create(createDesafioDto);
  }

  @Get('')
  async findOne(@Query('id') id: string) {
    if (id) {
      return await this.desafiosService.findOne(id);
    }
    return await this.desafiosService.findAll();
  }

  @Get('/jogador/:playerID')
  async consultarDesafiosDeUmJogador(
    @Param('playerID') playerID: string,
  ): Promise<any> {
    return await this.desafiosService.consultarDesafiosDeUmJogador(playerID);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDesafioDto: UpdateDesafioDto,
  ) {
    return await this.desafiosService.update(id, updateDesafioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.desafiosService.remove(id);
  }
}
