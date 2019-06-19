import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';

describe('Equipment Controller', () => {
  let controller: EquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipmentController],
      providers: [EquipmentService],
    }).compile();

    controller = module.get<EquipmentController>(EquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
