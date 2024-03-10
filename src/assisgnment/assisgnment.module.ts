import { Module } from '@nestjs/common';
import { AssisgnmentService } from './assisgnment.service';
import { AssisgnmentController } from './assisgnment.controller';

@Module({
  controllers: [AssisgnmentController],
  providers: [AssisgnmentService],
})
export class AssisgnmentModule {}
