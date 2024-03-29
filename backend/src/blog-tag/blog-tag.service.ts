import { Injectable } from '@nestjs/common';
import { CreateBlogTagDto } from './dto/create-blog-tag.dto';
import { UpdateBlogTagDto } from './dto/update-blog-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogTag } from './entities/blog-tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogTagService {
  constructor(
    @InjectRepository(BlogTag)
    private blogTagRepository: Repository<BlogTag>,
  ) {}

  create(createBlogTagDto: CreateBlogTagDto) {
    return this.blogTagRepository.save(createBlogTagDto);
  }

  findAll() {
    return this.blogTagRepository.find();
  }

  findOne(id: number) {
    return this.blogTagRepository.findOneBy({ id });
  }

  update(id: number, updateBlogTagDto: UpdateBlogTagDto) {
    return this.blogTagRepository.update(id, updateBlogTagDto);
  }

  remove(id: number) {
    return this.blogTagRepository.delete(id);
  }
}
