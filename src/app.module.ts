import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [EquipmentModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
