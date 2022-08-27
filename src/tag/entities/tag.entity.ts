import { Tag } from '@prisma/client';

export class TagEntity implements Tag {
  id: number;
  description: string;
}
