import GetInTouchForm from '../get-in-touch-form';
import { Button } from '../ui/button';

export default function GetInTouch() {
  return (
    <section className="py-18 container mx-auto">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="font-mono uppercase tracking-[5px] text-z-yellow">Contáctanos</span>
          <h2 className="font-serif text-6xl font-medium text-[#f7f7f8] md:max-w-lg">¡Hablemos!</h2>
          <p className="my-4 text-xl text-[#959499] md:max-w-lg">
            Tanto si es una pequeña empresa como si es una gran empresa, nos interesa saber cómo podemos ayudarle a
            resolver problemas. Puede llamarnos o escribir algunas notas en el formulario de contacto y nos pondremos en
            contacto de inmediato.
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
        <div className="mt-20 lg:mt-0">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
}
