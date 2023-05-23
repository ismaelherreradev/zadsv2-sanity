'use client';

import Globe from '../animation/globe';

import { staggerContainer } from '@/lib/motion';
import { motion } from 'framer-motion';
import { AlarmCheck, RefreshCw, Scroll } from 'lucide-react';
import CardRadialGradient from '../animation/card-radial-gradient';

const benefits = [
  {
    id: 1,
    Icon: AlarmCheck,
    title: 'Administración de campañas 24/7',
    content: 'Seguimientos y analisis constante de las campañas de publicidad digital, todos los días.',
  },
  {
    id: 2,
    Icon: Scroll,
    title: 'Reporte de resultados semanal',
    content:
      'Cada semana entregamos un reporte por videoconferencia donde explicamos y analizamos los resultados de las campañas.',
  },
  {
    id: 3,
    Icon: RefreshCw,
    title: 'Automatización de Marketing',
    content: 'Hacemos que recibas clientes de manera 100% automatica, solo debes cerrar las ventas.',
  },
];

function List() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding relative z-0 mx-auto"
    >
      <div className="pt-18">
        <div className="mt-10 grid grid-cols-1 gap-6">
          {benefits.map((process, index) => (
            <CardRadialGradient index={index} key={process.id} {...process} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center">
        <span className="font-mono uppercase tracking-[5px] text-z-yellow">Beneficios</span>
        <h2 className="mx-auto font-serif text-4xl font-medium text-[#f7f7f8] md:max-w-xl md:px-0 md:text-5xl lg:max-w-2xl lg:text-6xl xl:max-w-3xl">
          Brindamos soluciones avanzadas de publicidad digital.
        </h2>
        <p className="mx-auto my-4 max-w-md text-xl text-[#959499]">
          Segmentación de publicos, para alcanzar de manera directa a tu cliente ideal.
        </p>
      </div>
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <Globe />
        <List />
      </div>
    </section>
  );
}
