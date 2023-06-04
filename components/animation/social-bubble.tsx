'use client';

import { motion } from 'framer-motion';
import { Icons } from '../icons';

export default function SocialBubbleAnimation() {
  return (
    <div className="relative aspect-video lg:mx-0 lg:aspect-square">
      <div className="relative flex h-full flex-col overflow-y-hidden">
        <motion.div
          className="z-10 flex min-w-full flex-[0_0_auto] flex-col items-center"
          initial={{ y: 700 }}
          animate={{ y: -510 }}
          transition={{ repeat: Infinity, duration: 30 }}
        >
          <div className="bubble_leftRight3 bubble-circle">
            <Icons.facebook className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight4 bubble-circle">
            <Icons.twitter className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight3 bubble-circle">
            <Icons.instagram className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight2 bubble-circle">
            <Icons.linkedin className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
        </motion.div>
        <motion.div
          className="z-10 flex min-w-full flex-[0_0_auto] flex-col items-center"
          initial={{ y: 490 * 2 }}
          animate={{ y: 530 * -2 }}
          transition={{ repeat: Infinity, duration: 60 }}
        >
          <div className="bubble_leftRight3 bubble-circle">
            <Icons.youtube className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight bubble-circle">
            <Icons.google className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight2 bubble-circle">
            <Icons.googleAds className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
          <div className="bubble_leftRight bubble-circle">
            <Icons.wise className="h-12 w-12" />
            <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-xl md:rounded-2xl lg:rounded-3xl" />
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-10 z-20 h-20 w-full bg-background blur-lg "></div>
      <div className="absolute inset-0 -top-10 z-20 h-20 w-full bg-background blur-lg "></div>
    </div>
  );
}
