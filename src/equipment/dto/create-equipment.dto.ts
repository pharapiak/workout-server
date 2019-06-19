import { IsString, IsInt } from 'class-validator';

export class CreateEquipmentDto {
  @IsString()
  readonly name: string;
}
