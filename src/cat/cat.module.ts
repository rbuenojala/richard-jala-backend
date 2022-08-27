import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { PrismaService } from 'src/prisma.service';
import { CatRepository } from './repositories/cat.repository';

@Module({
  controllers: [CatController],
  providers: [CatService, PrismaService, CatRepository],
})
export class CatModule {}
