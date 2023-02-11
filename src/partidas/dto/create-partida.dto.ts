import { Resultado } from 'src/desafios/interface/dasafios.interface';
import { IsArray, IsNotEmpty } from 'class-validator';
import { Jogador } from 'src/jogadores/schema/jogadore.schema';

export class CreatePartidaDto {
  @IsNotEmpty()
  def: Jogador;
  @IsArray()
  resultado: Array<Resultado>;
  @IsArray()
  jogadores: Array<Jogador>;
}
