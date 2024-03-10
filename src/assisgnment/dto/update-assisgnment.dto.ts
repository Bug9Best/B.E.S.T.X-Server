import { PartialType } from '@nestjs/mapped-types';
import { CreateAssisgnmentDto } from './create-assisgnment.dto';

export class UpdateAssisgnmentDto extends PartialType(CreateAssisgnmentDto) {}
