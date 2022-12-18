import { Module } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { DesafiosController } from './desafios.controller';
import { DatabaseModule } from 'src/database/database.module';
import { desafiosProviders } from './dasafios.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DesafiosController],
  providers: [DesafiosService, ...desafiosProviders],
})
export class DesafiosModule {}
