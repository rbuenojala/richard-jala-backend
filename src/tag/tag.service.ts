import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagRepository } from './repositories/tag.repository';

@Injectable()
export class TagService {
  constructor(private readonly repository: TagRepository) {}

  create(createTagDto: CreateTagDto) {
    return this.repository.create(createTagDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.repository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
