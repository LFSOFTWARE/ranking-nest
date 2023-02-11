import { Module } from '@nestjs/common';
import { PartidasService } from './partidas.service';
import { PartidasController } from './partidas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { partidasProviders } from './partidas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PartidasController],
  providers: [PartidasService, ...partidasProviders],
  exports: [PartidasService],
})
export class PartidasModule {}
