'use client';

import Globe from '../animation/globe';

export default function Benefits() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center">
        <span className="font-mono uppercase tracking-[5px] text-z-yellow">Beneficios</span>
        <h2 className="mx-auto font-serif text-4xl font-medium text-[#f7f7f8] md:max-w-xl md:px-0 md:text-5xl lg:max-w-2xl lg:text-6xl xl:max-w-3xl">
          Brindamos soluciones avanzadas de publicidad digital.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 py-24 lg:grid-cols-3 lg:grid-rows-2">
        <div className="boder relative col-span-full flex min-h-[280px] select-none flex-col justify-end overflow-hidden rounded-3xl border  border-[#f7f7f814] bg-[#15131b] will-change-transform  lg:col-span-2 lg:row-span-2 lg:h-auto">
          <Globe />
          <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-3xl" />
        </div>
        <div className="relative  col-span-full flex min-h-[280px] select-none flex-col justify-end overflow-hidden rounded-3xl border border-[#f7f7f814] bg-[#15131b] will-change-transform sm:col-span-1">
          1
          <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-3xl" />
        </div>
        <div className="relative  col-span-full flex min-h-[280px] select-none flex-col justify-end overflow-hidden rounded-3xl border border-[#f7f7f814] bg-[#15131b] will-change-transform sm:col-span-1">
          2
          <div className="bg-noisy pointer-events-none absolute inset-0 z-10 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
