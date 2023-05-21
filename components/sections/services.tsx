import ServiceAnimation from '../animation/services';
import { Button } from '../ui/button';

export default function Services() {
  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="font-mono uppercase tracking-[5px] text-z-yellow">Servicios</span>
          <h2 className="max-w-md font-serif text-6xl font-medium text-[#f7f7f8]">Zads Marketing</h2>
          <p className="my-4 max-w-md text-xl text-[#959499]">
            Zads® se especializa en la colocación y{' '}
            <span className="font-bold underline decoration-z-yellow">gestión avanzada</span> de publicidad digital en
            multiples plataformas.
          </p>
          <Button size={'lg'} variant={'default'} className="mx-auto flex text-lg md:m-0">
            Agenda una reunión ahora
            <svg
              aria-hidden="true"
              focusable="false"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-mr-1 ml-1.5 fill-current"
            >
              <path
                d="m9.013 13-.962-.954 3.34-3.35H2V7.304h9.392L8.05 3.96 9.013 3 14 8l-4.987 5Z"
                fill="currentFill"
              />
            </svg>
          </Button>
        </div>
        <div>
          <ServiceAnimation />
        </div>
      </div>
    </section>
  );
}
