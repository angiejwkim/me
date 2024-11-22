'use client';

import React, { useEffect, useState } from 'react';

interface HovercardPosition {
  x: number;
  y: number;
}

export default function Home() {
  const [showHovercard, setShowHovercard] = useState(false);
  const [hovercardPosition, setHovercardPosition] =
    useState<HovercardPosition>({ x: 0, y: 0 });
  const [pairs, setPairs] = useState<string[][]>([]);
  const [randomPair, setRandomPair] = useState<string[]>([]);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    fetch('/api/notion')
      .then((res) => res.json())
      .then(setPairs)
      .catch((_) => {
        setOffline(true);
        console.error('JSON parse error');
      });
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (pairs.length > 0) {
      const randomIndex = Math.floor(Math.random() * pairs.length);
      setRandomPair(pairs[randomIndex]);
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
    const rect = e.currentTarget.getBoundingClientRect();
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
          href={randomPair[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="name-link"
        >
          angie kim
        </a>
        {offline && <div>is offline</div>}
      </div>
      {showHovercard && randomPair && (
        <div
          className="hovercard"
          style={{
            position: 'absolute',
            left: `${hovercardPosition.x}px`,
            top: `${hovercardPosition.y}px`,
          }}
        >
          {randomPair[0]}
        </div>
      )}
    </main>
  );
}
