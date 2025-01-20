import { Position } from '@/app/components/Draggable';

export const FIXED_ITEM_SIZE = 256; // Keep image size constant

export function generateGridPosition(
  containerWidth: number,
  containerHeight: number,
  index: number,
  totalItems: number
): Position {
  const cols = Math.ceil(Math.sqrt(totalItems));
  const rows = Math.ceil(totalItems / cols);

  // Calculate available space for distribution
  const totalWidthSpace = containerWidth - FIXED_ITEM_SIZE * cols;
  const totalHeightSpace = containerHeight - FIXED_ITEM_SIZE * rows;

  // Calculate spacing between items (minimum of 20px)
  const horizontalSpacing = Math.max(
    20,
    totalWidthSpace / (cols + 1)
  );
  const verticalSpacing = Math.max(20, totalHeightSpace / (rows + 1));

  const row = Math.floor(index / cols);
  const col = index % cols;

  // Calculate base position with proportional spacing
  const baseX =
    col * (FIXED_ITEM_SIZE + horizontalSpacing) + horizontalSpacing;
  const baseY =
    row * (FIXED_ITEM_SIZE + verticalSpacing) + verticalSpacing;

  // Generate a consistent rotation based on the index
  const rotation = ((index * 17) % 30) - 15; // Generates a value between -15 and 15

  return {
    x: baseX,
    y: baseY,
    rotation,
  };
}
