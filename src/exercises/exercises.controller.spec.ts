import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';

describe('Exercises Controller', () => {
  let controller: ExercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      providers: [ExercisesService],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
