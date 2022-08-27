import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTagDto } from '../dto/create-tag.dto';
import { UpdateTagDto } from '../dto/update-tag.dto';
import { TagEntity } from '../entities/tag.entity';

@Injectable()
export class TagRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto): Promise<TagEntity> {
    return this.prisma.tag.create({ data: createTagDto });
  }

  async findAll(): Promise<TagEntity[]> {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number): Promise<TagEntity> {
    return this.prisma.tag.findUnique({ where: { id } });
  }

  async update(id: number, updateTagDto: UpdateTagDto): Promise<TagEntity> {
    return this.prisma.tag.update({ where: { id }, data: updateTagDto });
  }

  async remove(id: number): Promise<TagEntity> {
    return this.prisma.tag.delete({ where: { id } });
  }
}
