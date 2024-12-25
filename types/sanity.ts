export interface TextPage {
  title: string;
  content: any[]; // Sanity block content type
}

export interface GalleryPage {
  title: string;
  images: any[]; // Sanity image type
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    current: string;
  };
  content: any; // Define more specifically based on your content structure
  mainImage?: string;
  publishedAt: string;
}
