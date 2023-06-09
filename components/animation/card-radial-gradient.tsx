'use client';

import { motion, useMotionTemplate } from 'framer-motion';

import useFramerMouseMove from '@/components/hooks/useFramerMouseMove';
import { fadeIn } from '@/lib/motion';
import type { ComponentProps, ComponentType } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Props = {
  Icon: ComponentType<ComponentProps<'svg'> & { title?: string }>;
  index: number;
  title: string;
  content: string;
  direction?: 'up' | 'down' | 'left' | 'right';
};

export default function CardRadialGradient({ Icon, title, content, index, direction = 'up' }: Props) {
  const { mouseX, mouseY, handleMouseMove } = useFramerMouseMove();

  return (
    <motion.div variants={fadeIn(direction, 'spring', index * 0.5, 0.75)}>
      <Card onMouseMove={handleMouseMove} className="group relative rounded-3xl border border-[#f7f7f814] bg-[#15131b]">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(247, 247, 248, 0.15),
              transparent 80%
            )
          `,
          }}
        />
        <CardHeader className="pb-0">
          <Icon className="mb-2 h-8 w-8 text-z-yellow" />
          <CardTitle className="font-serif text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-2">
          <p className="text-base font-light text-[#959499]">{content}</p>
        </CardContent>
        <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
      </Card>
    </motion.div>
  );
}
