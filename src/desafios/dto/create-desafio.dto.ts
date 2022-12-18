import {
  IsDateString,
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

import { Jogador } from 'src/jogadores/interfaces/jogadores.interface';

export class CreateDesafioDto {
  @IsNotEmpty()
  @IsDateString()
  dataHoraDesafio: Date;

  @IsNotEmpty()
  solicitante: Jogador;
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  jogadores: Array<Jogador>;
}
