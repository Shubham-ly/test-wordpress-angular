import { Post } from './post';

export type FaqCategoryType = {
  id: number;
  name: string;
  slug: string;
};

export type FaqType = {
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
} & Post;
