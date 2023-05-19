'use client';

import { staggerContainer } from '@/lib/motion';
import { motion } from 'framer-motion';
import CardRadialGradient from '../card-radial-gradient';

const processes = [
  {
    id: 1,
    icon: 'icon',
    title: 'Estrategía',
    content: 'Creación de estrategias personalizadas para su empresa que generan ventas, leads y reconocimiento.',
  },
  {
    id: 2,
    icon: 'icon',
    title: 'Desarrollo',
    content:
      'En marcha la estrategia, damos un seguimiento estricto para garantizar un retorno a su inversión en publicidad.',
  },
  {
    id: 3,
    icon: 'icon',
    title: 'Analisís',
    content: 'Profundo análisis de datos y reportes de resultados para mejorar el desempeño de campañas futuras.',
  },
];

export default function Processes() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding relative z-0 mx-auto max-w-7xl`}
    >
      <div className="pt-24">
        <span className="text-lg uppercase tracking-widest text-[#F4B400]">Procesos</span>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <CardRadialGradient index={index} key={process.id} {...process} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
