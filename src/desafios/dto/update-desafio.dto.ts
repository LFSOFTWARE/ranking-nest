import { Jogador } from 'src/jogadores/interfaces/jogadores.interface';
import { DesafiosStaus } from './../enum/dafios-status.enum';

export class UpdateDesafioDto {
  dataHoraDesafio: Date;
  jogadores: Array<Jogador>;
  status: DesafiosStaus;
}
