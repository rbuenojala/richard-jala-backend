import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatRepository } from './repositories/cat.repository';

@Injectable()
export class CatService {
  constructor(private readonly repository: CatRepository) {}
  create(createCatDto: CreateCatDto) {
    return this.repository.create(createCatDto);
  }

  findAll(orderBy: number, tags: string, requested: string | undefined) {
    return this.repository.findAll(orderBy, tags, requested);
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.repository.update(id, updateCatDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
