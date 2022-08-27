export class CreateCatDto {
  name: string;
  imageUrl: string;
  favorited: boolean;
  isAdopted: boolean;
  tags: string[];
}
