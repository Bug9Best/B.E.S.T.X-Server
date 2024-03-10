import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UoloadService } from './uoload.service';
import { CreateUoloadDto } from './dto/create-uoload.dto';
import { UpdateUoloadDto } from './dto/update-uoload.dto';

@Controller('uoload')
export class UoloadController {
  constructor(private readonly uoloadService: UoloadService) {}

  @Post()
  create(@Body() createUoloadDto: CreateUoloadDto) {
    return this.uoloadService.create(createUoloadDto);
  }

  @Get()
  findAll() {
    return this.uoloadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uoloadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUoloadDto: UpdateUoloadDto) {
    return this.uoloadService.update(+id, updateUoloadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uoloadService.remove(+id);
  }
}
