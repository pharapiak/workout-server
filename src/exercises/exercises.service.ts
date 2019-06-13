import { Injectable } from '@nestjs/common';
import { Exercise } from './exercise';

@Injectable()
export class ExercisesService {

    private readonly exercises: Exercise[] = [];
    private maxId = 0;

    async create(exercise: Exercise): Promise<Exercise> {

        exercise.id = (++this.maxId).toString();
        this.exercises.push(exercise);
        return exercise;
      }

      async findAll(): Promise<Exercise[]> {
        return this.exercises;
      }

      async findOne(id: string): Promise<Exercise> {
        return this.exercises.find(e => e.id === id);
      }

}
