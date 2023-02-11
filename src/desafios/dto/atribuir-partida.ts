import { IsNotEmpty } from 'class-validator';
import { Jogador } from 'src/jogadores/schema/jogadore.schema';
import { Resultado } from '../interface/dasafios.interface';

export class AtribuirDesafioPartidaDto {
  @IsNotEmpty()
  def: Jogador;

  @IsNotEmpty()
  resultado: Array<Resultado>;
}
