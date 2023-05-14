'use client';

import { motion, useTime, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function MainHeadline() {
  const colors = useMotionValue((360 / 10000) * (360 / 10000) * Math.random());

  return (
    <>
      <motion.div
        className="gradientprovider_provider transform-gpu"
        style={
          {
            '--gradient-progress': 0,
            '--gradient-color-left': '#64b2ff',
            '--gradient-color-center': '#8e84ff',
            '--gradient-color-right': '#d499ed',
            '--gradient': '#8e84ff, #d499ed, #f47b8f, #fabfb2, #fffad1, #95f3d9, #64b2ff, #8e84ff, #d499ed, #f47b8f',
            '--gradient-interval-size': 3,
            '--gradient-length': 10,
            '--gradient-update-delay': 1000,
          } as any
        }
        animate={
          {
            '--gradient-progress': [0, 1],
          } as any
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <section className="animate-mask-reveal transform-gpu">
          <motion.h1 className="sectionhero_headline gradientprovider_diagonal mb-[0.2em] flex transform-gpu flex-col justify-start whitespace-nowrap bg-clip-text pb-[0.2em] text-center leading-[0.9] text-transparent [--font-scale:0.17] after:inline-block sm:[--font-scale:0.124] lg:[--font-scale:0.127]">
            Solución
            <br /> completa de <br />
            publicidad
            <br />
            digital
          </motion.h1>
        </section>
      </motion.div>
    </>
  );
}