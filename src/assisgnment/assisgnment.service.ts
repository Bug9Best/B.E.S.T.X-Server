import { Injectable } from '@nestjs/common';
import { CreateAssisgnmentDto } from './dto/create-assisgnment.dto';
import { UpdateAssisgnmentDto } from './dto/update-assisgnment.dto';

@Injectable()
export class AssisgnmentService {
  create(createAssisgnmentDto: CreateAssisgnmentDto) {
    return 'This action adds a new assisgnment';
  }

  findAll() {
    return `This action returns all assisgnment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assisgnment`;
  }

  update(id: number, updateAssisgnmentDto: UpdateAssisgnmentDto) {
    return `This action updates a #${id} assisgnment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assisgnment`;
  }
}
