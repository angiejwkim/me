'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [showHovercard, setShowHovercard] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [hovercardPosition, setHovercardPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const text = document.querySelector('.circleText p');
    text.innerHTML = text.innerText
      .split('')
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 7}deg)">${char}</span>`
      )
      .join('');
  }, []);

  const handleMouseEnter = (e) => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setShowHovercard(true);
    updateHovercardPosition(e);
  };

  const handleMouseMove = (e) => {
    if (showHovercard) {
      updateHovercardPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setShowHovercard(false);
  };

  const updateHovercardPosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHovercardPosition({ x, y });
  };

  return (
    <div className="screen">
      <div className="circle">
        <div
          className="header"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          angie kim
          {showHovercard && (
            <div
              className="hovercard"
              style={{
                left: `${hovercardPosition.x}px`,
                top: `${hovercardPosition.y}px`,
              }}
            >
              {randomNumber}
            </div>
          )}
        </div>
        <div className="circleText">
          <p>is on the way</p>
        </div>
      </div>
    </div>
  );
}
