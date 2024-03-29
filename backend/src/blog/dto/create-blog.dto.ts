export class CreateBlogDto {
  title: string;
  authorId: number;
  author: string;
  about: string;
  createdOn: string;
  modifiedOn: string;
  content: string;
  category: number;
  tags: string | null;
  imageUrl: string | null;
  github: string | null;
  twitter: string | null;
  facebook: string | null;
}
