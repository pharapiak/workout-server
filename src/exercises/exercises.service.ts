import { Injectable } from '@nestjs/common';
import { Exercise } from './exercise';

@Injectable()
export class ExercisesService {
  private readonly store: Exercise[] = [];
  private maxId = 0;

  async create(exercise: Exercise): Promise<Exercise> {
    exercise.id = (++this.maxId).toString();
    this.store.push(exercise);
    return exercise;
  }

  async findAll(): Promise<Exercise[]> {
    return this.store;
  }

  async findOne(id: string): Promise<Exercise> {
    return this.store.find(e => e.id === id);
  }
}
