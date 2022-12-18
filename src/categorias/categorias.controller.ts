import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './interface/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  async findAll(): Promise<Array<Categoria>> {
    return this.categoriasService.findAll();
  }

  @Get(':categoria')
  async findOne(@Param('categoria') categoria: string): Promise<Categoria> {
    return this.categoriasService.findOne(categoria);
  }

  @Put(':categoria')
  async update(
    @Param('categoria') categoria: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<void> {
    await this.categoriasService.update(categoria, updateCategoriaDto);
  }

  @Post(':categoria/jogadores/:idJogador')
  async atribuirJogador(@Param() params: string[]) {
    await this.categoriasService.atribuirJogador(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
