import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ExerciseDto } from './dto/exercise.dto';
import { create } from 'domain';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExercisesService } from './exercises.service';
import { Exercise } from './exercise';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  async create(
    @Body() createExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.create(createExerciseDto as Exercise);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<ExerciseDto> {
    return this.exercisesService.findOne(id);
  }

  @Get()
  async findAll(): Promise<ExerciseDto[]> {
    return (await this.exercisesService.findAll()).map(e => e as ExerciseDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} exercise`;
  }
}
