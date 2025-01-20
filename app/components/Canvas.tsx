import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import DraggableImage, { Position } from './Draggable';
import {
  FIXED_ITEM_SIZE,
  generateGridPosition,
} from '@/lib/imageLayout';

export function arrange(
  height: number,
  width: number,
  items: SanityImageSource[]
): React.ReactNode {
  const positions: Position[] = [];

  items.forEach((_, index) => {
    const position = generateGridPosition(
      width,
      height,
      index,
      items.length
    );
    positions.push(position);
  });

  return (
    <div className="w-full h-full relative">
      {items.map((item, index) => (
        <DraggableImage
          key={index}
          src={item}
          index={index}
          position={positions[index]}
          size={FIXED_ITEM_SIZE}
        />
      ))}
    </div>
  );
}
