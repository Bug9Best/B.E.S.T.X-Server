import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { ForumModule } from './forum/forum.module';
import { ProfileModule } from './profile/profile.module';
import { UoloadModule } from './uoload/uoload.module';
import { UploadModule } from './upload/upload.module';
import { AssisgnmentModule } from './assisgnment/assisgnment.module';
import { LectureModule } from './lecture/lecture.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    AuthModule,
    CourseModule,
    ForumModule,
    ProfileModule,
    UoloadModule,
    UploadModule,
    AssisgnmentModule,
    LectureModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
