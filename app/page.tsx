'use client';

import { getAllTargets } from '@/sanity/lib/client';
import { targetTypes } from '@/sanity/schemaTypes/target';
import { Target } from '@/types/sanity';
import React, { useEffect, useState } from 'react';

interface HovercardPosition {
  x: number;
  y: number;
}

function getTargetValue(target: Target): string | undefined {
  switch (target.targetType) {
    case targetTypes.PAGE:
      return target.slug;
    case targetTypes.URL:
      return target.externalUrl;
    case targetTypes.SECONDARY_HOVER:
      return target.secondaryHover;
  }
}

export default function Home() {
  const [showHovercard, setShowHovercard] = useState(false);
  const [hovercardPosition, setHovercardPosition] =
    useState<HovercardPosition>({ x: 0, y: 0 });
  const [targets, setTargets] = useState<Target[]>([]);
  const [index, setIndex] = useState(0);
  const [currentTarget, setCurrentTarget] = useState<Target>();

  useEffect(() => {
    getAllTargets().then(setTargets);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (targets.length > 0) {
      const prevIndex = index;
      let newIndex = prevIndex;
      while (newIndex === prevIndex) {
        newIndex = Math.floor(Math.random() * targets.length);
      }
      setIndex(newIndex);
      setCurrentTarget(targets[newIndex]);
      setShowHovercard(true);
      updateHovercardPosition(e);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (showHovercard) {
      updateHovercardPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setShowHovercard(false);
  };

  const updateHovercardPosition = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const x = e.clientX;
    const y = e.clientY;
    setHovercardPosition({ x, y });
  };

  return (
    <main>
      <div
        className="header"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={currentTarget ? getTargetValue(currentTarget) : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="name-link"
        >
          angie kim
        </a>
      </div>
      {showHovercard && currentTarget && (
        <div
          className="hovercard"
          style={{
            position: 'absolute',
            left: `${hovercardPosition.x}px`,
            top: `${hovercardPosition.y}px`,
          }}
        >
          {currentTarget.hover}
        </div>
      )}
    </main>
  );
}
