import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { Jogador } from './interfaces/jogadores.interface';
import { InvalidParams } from 'src/common/pipes/invalid-params.pipe';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(@Body() createJogadoreDto: CreateJogadoreDto) {
    return await this.jogadoresService.create(createJogadoreDto);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async atualizarJogador(
    @Body() updateJogadoreDto: UpdateJogadoreDto,
    @Param('id') id: string,
  ): Promise<void> {
    await this.jogadoresService.update(updateJogadoreDto, id);
  }

  @Get()
  async findAll(): Promise<Jogador[]> {
    return this.jogadoresService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id', InvalidParams) id: string): Promise<Jogador> {
    return this.jogadoresService.findById(id);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.jogadoresService.remove(_id);
  }
}
