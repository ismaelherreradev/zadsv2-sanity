'use client';

import { useMotionValue } from 'framer-motion';

import type { MouseEvent } from 'react';

export default function useFramerMouseMove() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return {
    mouseX,
    mouseY,
    handleMouseMove,
  };
}
