import { Cat } from '@prisma/client';

export class CatEntity implements Cat {
  id: number;
  name: string;
  createdAt: Date;
  imageUrl: string;
  favorited: boolean;
  isAdopted: boolean;
}
