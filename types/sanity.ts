export interface Text {
  title: string;
  content: any[]; // Sanity block content type
}

export interface Gallery {
  title: string;
  images: any[]; // Sanity image type
}

export interface Post {
  _id: string;
  _type: string;
  title: string;
  slug: {
    current: string;
  };
  popup: string;
}
