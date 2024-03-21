export interface ITopSectionCard {
  title: string;
  paragraph: string;
  buttonText: string;
  image: string;
  attribute: string;
  link: string;
}

export type Slide = {
  image: string;
  text: string;
};

export type Post = {
  id: number;
  image: string;
  attribute: string;
  date: string;
  title: string;
  paragraph: string;
  slug: string;
  author: string;
  readTime: string;
  authorImage: string;
};

export type Item = {
  name: string;
  description: string;
  price: number;
};

export interface ISection {
  header: string;
  description: string;
  svg: string;
  items: Item[];
}
