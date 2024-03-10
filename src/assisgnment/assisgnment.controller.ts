import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssisgnmentService } from './assisgnment.service';
import { CreateAssisgnmentDto } from './dto/create-assisgnment.dto';
import { UpdateAssisgnmentDto } from './dto/update-assisgnment.dto';

@Controller('assisgnment')
export class AssisgnmentController {
  constructor(private readonly assisgnmentService: AssisgnmentService) {}

  @Post()
  create(@Body() createAssisgnmentDto: CreateAssisgnmentDto) {
    return this.assisgnmentService.create(createAssisgnmentDto);
  }

  @Get()
  findAll() {
    return this.assisgnmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assisgnmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssisgnmentDto: UpdateAssisgnmentDto) {
    return this.assisgnmentService.update(+id, updateAssisgnmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assisgnmentService.remove(+id);
  }
}
