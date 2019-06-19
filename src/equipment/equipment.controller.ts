import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { EquipmentDto } from './dto/equipment.dto';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  async create(
    @Body() createEquipmentDto: CreateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentService.create(createEquipmentDto as Equipment);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<EquipmentDto> {
    return this.equipmentService.findOne(id);
  }

  @Get()
  async findAll(): Promise<EquipmentDto[]> {
    return (await this.equipmentService.findAll()).map(e => e as EquipmentDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return `This action updates a #${id} equipment`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} equipment`;
  }
}
