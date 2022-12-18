import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
@Module({
  imports: [JogadoresModule, CategoriasModule, DesafiosModule, PartidasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
