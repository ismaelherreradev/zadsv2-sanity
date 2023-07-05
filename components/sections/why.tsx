import SocialBubbleAnimation from '../animation/social-bubble';

export default function Why() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center">
        <span className="font-mono uppercase tracking-[5px] text-z-yellow">¿Por qué publicidad digital?</span>
        <h2 className="mx-auto font-serif text-4xl font-medium text-[#f7f7f8] md:max-w-xl md:px-0 md:text-5xl lg:max-w-4xl lg:text-6xl xl:max-w-5xl">
          Todos tus productos y servicios en múltiples plataformas automáticamente.
        </h2>
      </div>
      <div className="mx-auto pl-4 grid grid-cols-1 items-center gap-6 py-24 md:grid-cols-2">
        <ul className="list-disc space-y-4 font-serif text-xl text-[#959499]">
          <li>Anuncios de generación de leads, ventas online, reconocimiento y más.</li>
          <li>
            Estrategias avanzadas de marketing digital para que consigas la mayor cantidad de clientes y ventas
            posibles, resultados que incluso superen tus espectativas.
          </li>
          <li>
            Reducción de costos en marketing para tu empresa y obtención de miles de datos para su posterior análisis.{' '}
          </li>
          <li>Segmentación avanzada de publicos, para alcanzar de manera directa a tu cliente ideal. </li>
        </ul>
        <SocialBubbleAnimation />
      </div>
    </section>
  );
}
