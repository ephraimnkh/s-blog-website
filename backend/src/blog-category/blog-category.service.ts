import { Injectable } from '@nestjs/common';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogCategory } from './entities/blog-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectRepository(BlogCategory)
    private blogCategoryRepository: Repository<BlogCategory>,
  ) {}

  create(createBlogCategoryDto: CreateBlogCategoryDto) {
    return this.blogCategoryRepository.save(createBlogCategoryDto);
  }

  findAll() {
    return this.blogCategoryRepository.find();
  }

  findOne(id: number) {
    return this.blogCategoryRepository.findOneBy({ id });
  }

  update(id: number, updateBlogCategoryDto: UpdateBlogCategoryDto) {
    return this.blogCategoryRepository.update(id, updateBlogCategoryDto);
  }

  remove(id: number) {
    return this.blogCategoryRepository.delete(id);
  }
}
