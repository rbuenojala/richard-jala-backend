import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { TagModule } from './tag/tag.module';

@Module({

  imports: [CatModule, TagModule]
})
export class AppModule {}
