import { JogadoresModule } from './../jogadores/jogadores.module';
import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { categoriaProviders } from './categorias.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, JogadoresModule],
  controllers: [CategoriasController],
  providers: [CategoriasService, ...categoriaProviders],
  exports: [CategoriasService],
})
export class CategoriasModule {}
