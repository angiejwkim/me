import React from 'react';
import ImageGallery from '../../components/ImageGallery';

// Mock function to fetch gallery data
async function getGalleryData(slug) {
  // In a real application, you would fetch data from a CDN or database
  const galleries = {
    ceramics: [
      {
        id: 1,
        src: 'https://example-cdn.com/ceramics1.jpg',
        alt: 'Ceramic vase',
      },
      {
        id: 2,
        src: 'https://example-cdn.com/ceramics2.jpg',
        alt: 'Ceramic bowl',
      },
      {
        id: 3,
        src: 'https://example-cdn.com/ceramics3.jpg',
        alt: 'Ceramic plate',
      },
    ],
    photography: [
      {
        id: 1,
        src: 'https://example-cdn.com/photo1.jpg',
        alt: 'Landscape photo',
      },
      {
        id: 2,
        src: 'https://example-cdn.com/photo2.jpg',
        alt: 'Portrait photo',
      },
      {
        id: 3,
        src: 'https://example-cdn.com/photo3.jpg',
        alt: 'Street photo',
      },
    ],
  };
  return galleries[slug] || [];
}

export default async function GalleryPage({ params }) {
  const { slug } = params;
  const images = await getGalleryData(slug);

  return (
    <div>
      <h1>{slug.charAt(0).toUpperCase() + slug.slice(1)} Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}
