import { PartialType } from '@nestjs/mapped-types';
import { CreateUoloadDto } from './create-uoload.dto';

export class UpdateUoloadDto extends PartialType(CreateUoloadDto) {}
