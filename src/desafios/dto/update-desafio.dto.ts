import { Jogador } from 'src/jogadores/schema/jogadore.schema';
import { DesafiosStaus } from './../enum/dafios-status.enum';

export class UpdateDesafioDto {
  dataHoraDesafio: Date;
  jogadores: Array<Jogador>;
  status: DesafiosStaus;
}
