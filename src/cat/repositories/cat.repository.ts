import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { CatEntity } from '../entities/cat.entity';
import { OrderBy } from '../enums/orderEnum';

@Injectable()
export class CatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCatDto: CreateCatDto): Promise<CatEntity> {
    const { tags } = createCatDto;
    delete createCatDto.tags;

    const createdCat = await this.prisma.cat.create({
      data: createCatDto,
    });

    tags.forEach(async (tag) => {
      const data = {
        tagId: +tag,
        catId: createdCat.id,
      };

      await this.prisma.catTags.create({ data });
    });

    return createdCat;
  }

  async findAll(orderBy: number, tags: string, requested: string | undefined) {
    const where =
      requested === undefined
        ? undefined
        : {
            isAdopted: requested === 'true' ? true : false,
          };

    let tagsArray = undefined;
    if (tags) {
      tagsArray = tags.split(',').map((item) => {
        return +item;
      });
    }

    if (orderBy == OrderBy.name) {
      return this.prisma.cat.findMany({
        where,
        include: {
          CatTags: {
            include: { Tag: {} },
            where: { tagId: { in: tagsArray } },
          },
        },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      });
    } else if (orderBy == OrderBy.createdAt) {
      return this.prisma.cat.findMany({
        where,
        include: {
          CatTags: {
            include: { Tag: {} },
            where: { tagId: { in: tagsArray } },
          },
        },
        orderBy: [
          {
            createdAt: 'asc',
          },
        ],
      });
    } else if (orderBy == OrderBy.favorited) {
      return this.prisma.cat.findMany({
        where,
        include: {
          CatTags: {
            include: { Tag: {} },
            where: { tagId: { in: tagsArray } },
          },
        },
        orderBy: [
          {
            favorited: 'asc',
          },
        ],
      });
    } else if (orderBy == OrderBy.isAdopted) {
      return this.prisma.cat.findMany({
        where,
        include: {
          CatTags: {
            include: { Tag: {} },
            where: { tagId: { in: tagsArray } },
          },
        },
        orderBy: [
          {
            favorited: 'asc',
          },
        ],
      });
    } else {
      return this.prisma.cat.findMany({
        where,
        include: {
          CatTags: {
            include: { Tag: {} },
            where: { tagId: { in: tagsArray } },
          },
        },
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      });
    }
  }

  async findOne(id: number): Promise<CatEntity> {
    return this.prisma.cat.findUnique({
      include: {
        CatTags: {
          include: { Tag: {} },
        },
      },
      where: { id },
    });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const { tags } = updateCatDto;
    delete updateCatDto.tags;

    if (tags) {
      await this.prisma.catTags.deleteMany({
        where: { catId: id },
      }),
        tags.forEach(async (tag) => {
          const data = {
            tagId: +tag,
            catId: id,
          };

          await this.prisma.catTags.create({ data });
        });
    }

    return this.prisma.cat.update({ where: { id }, data: updateCatDto });
  }

  remove(id: number) {
    return this.prisma.cat.delete({ where: { id } });
  }
}
