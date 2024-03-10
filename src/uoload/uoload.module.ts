import { Module } from '@nestjs/common';
import { UoloadService } from './uoload.service';
import { UoloadController } from './uoload.controller';

@Module({
  controllers: [UoloadController],
  providers: [UoloadService],
})
export class UoloadModule {}
