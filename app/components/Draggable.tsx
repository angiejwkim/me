import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import interact from 'interactjs';
import { useEffect, useRef } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Props for the draggable image component
export interface StaticImageProps {
  src: SanityImageSource;
  index: number;
  position: Position;
  size: number;
}

export interface Position {
  x: number;
  y: number;
  rotation: number;
}

export default function DraggableImage({
  src,
  index,
  position,
  size,
}: StaticImageProps) {
  // Ref to the DOM element for interact.js
  const elementRef = useRef<HTMLDivElement>(null);
  // Keep track of current position during dragging
  const currentPosition = useRef(position);

  useEffect(() => {
    if (!elementRef.current) return;

    // Set up interact.js draggable
    const interactable = interact(elementRef.current).draggable({
      // Configure inertia for smoother dragging
      inertia: {
        resistance: 8, // Higher resistance = less inertia
        minSpeed: 100, // Minimum speed for inertia to kick in
        endSpeed: 10, // Speed at which inertia stops
      },
      // Restrict movement to parent container
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true,
        }),
      ],
      // Handle drag movement
      listeners: {
        move: (event) => {
          // Update position based on drag delta
          currentPosition.current.x += event.dx;
          currentPosition.current.y += event.dy;
          // Apply new position via transform
          event.target.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) rotate(${position.rotation}deg)`;
        },
      },
    });

    // Cleanup interact.js when component unmounts
    return () => {
      interactable.unset();
    };
  }, [position.rotation]);

  // Get the actual image URL from Sanity
  const imageUrl = urlFor(src).url();

  return (
    <div
      ref={elementRef}
      className="absolute cursor-move"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${position.rotation}deg)`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Gallery image ${index + 1}`}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      </div>
    </div>
  );
}
