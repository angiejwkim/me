'use client';

import { GalleryPage } from '@/types/sanity';
import { arrange } from '@/app/components/Canvas';
import { useEffect, useRef, useState } from 'react';

interface Props {
  page: GalleryPage;
}

export default function GalleryComponent({ page }: Props) {
  // Ref to measure container dimensions
  const containerRef = useRef<HTMLDivElement>(null);
  // State to store container dimensions
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Set up resize handling
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      // Get actual container dimensions
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Cleanup resize listener
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Validate page content
  if (!page?.content || !Array.isArray(page.content)) {
    console.warn('Invalid or missing content array');
    return null;
  }

  return (
    <div className="fixed inset-x-0 top-24 bottom-8">
      <div ref={containerRef} className="w-full h-full relative">
        {dimensions.width > 0 && dimensions.height > 0 && (
          <div className="absolute inset-0">
            {arrange(
              dimensions.height,
              dimensions.width,
              page.content
            )}
          </div>
        )}
      </div>
    </div>
  );
}
