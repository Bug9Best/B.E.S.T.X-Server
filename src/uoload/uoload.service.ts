import { Injectable } from '@nestjs/common';
import { CreateUoloadDto } from './dto/create-uoload.dto';
import { UpdateUoloadDto } from './dto/update-uoload.dto';

@Injectable()
export class UoloadService {
  create(createUoloadDto: CreateUoloadDto) {
    return 'This action adds a new uoload';
  }

  findAll() {
    return `This action returns all uoload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uoload`;
  }

  update(id: number, updateUoloadDto: UpdateUoloadDto) {
    return `This action updates a #${id} uoload`;
  }

  remove(id: number) {
    return `This action removes a #${id} uoload`;
  }
}
