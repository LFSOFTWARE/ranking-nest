import { Module } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { DesafiosController } from './desafios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { desafiosProviders } from './dasafios.providers';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  imports: [DatabaseModule, JogadoresModule, CategoriasModule],
  controllers: [DesafiosController],
  providers: [DesafiosService, ...desafiosProviders],
})
export class DesafiosModule {}
