import React from 'react';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}
