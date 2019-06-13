import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment';

@Injectable()
export class EquipmentService {

    private readonly equipment: Equipment[] = [];
    private maxId = 0;

    async create(equipment: Equipment): Promise<Equipment> {

        equipment.id = (++this.maxId).toString();
        this.equipment.push(equipment);
        return equipment;
      }

      async findAll(): Promise<Equipment[]> {
        return this.equipment;
      }

      async findOne(id: string): Promise<Equipment> {
        return this.equipment.find(e => e.id === id);
      }

}
