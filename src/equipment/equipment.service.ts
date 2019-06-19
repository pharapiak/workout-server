import { Injectable } from '@nestjs/common';
import { Equipment } from './equipment';

@Injectable()
export class EquipmentService {
  private readonly store: Equipment[] = [];
  private maxId = 0;

  async create(equipment: Equipment): Promise<Equipment> {
    equipment.id = (++this.maxId).toString();
    this.store.push(equipment);
    return equipment;
  }

  async findAll(): Promise<Equipment[]> {
    return this.store;
  }

  async findOne(id: string): Promise<Equipment> {
    return this.store.find(e => e.id === id);
  }
}
