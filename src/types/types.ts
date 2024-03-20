interface ITopSectionCard {
  title: string;
  paragraph: string;
  buttonText: string;
  image: string;
  link: string;
}

type Slide = {
  image: string;
  text: string;
};

type Post = {
  id: number;
  image: string;
  date: string;
  title: string;
  paragraph: string;
  slug: string;
  author: string;
  readTime: string;
  authorImage: string;
};
