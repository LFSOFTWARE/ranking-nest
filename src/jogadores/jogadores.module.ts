import { Module } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { JogadoresController } from './jogadores.controller';
import { DatabaseModule } from 'src/database/database.module';
import { jogadoresProviders } from './jogadores.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [JogadoresController],
  providers: [JogadoresService, ...jogadoresProviders],
})
export class JogadoresModule {}
