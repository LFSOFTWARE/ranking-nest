import { Categoria } from 'src/categorias/interface/categoria.interface';
import { Jogador } from 'src/jogadores/interfaces/jogadores.interface';
import { DesafiosStaus } from '../enum/dafios-status.enum';
import { Partida } from '../interface/dasafios.interface';

export class CreateDesafioDto {
  dataHoraDesafio: Date;
  status: DesafiosStaus;
  dataHoraSolicitacao: Date;
  dataHoraResposta: Date;
  solicitante: Jogador;
  categoria: Categoria;
  jogadores: Array<Jogador>;
  partida: Partida;
}
