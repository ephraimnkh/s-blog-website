import { Module } from '@nestjs/common';
import { BlogTagService } from './blog-tag.service';
import { BlogTagController } from './blog-tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogTag } from './entities/blog-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogTag])],
  controllers: [BlogTagController],
  providers: [BlogTagService],
})
export class BlogTagModule {}
