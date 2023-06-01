import MainHeadline from './main-headline';
import Processes from './sections/processes';
import { Button } from './ui/button';

export default function Mainheader() {
  return (
    <section className="animate-mask-reveal container mx-auto min-h-fit transform-gpu pb-8">
      <MainHeadline />
      <p className="mx-auto my-8 px-[5%] text-center text-lg font-normal leading-6 sm:my-10 sm:max-w-md sm:px-0 md:my-8 md:max-w-lg md:text-2xl md:leading-9 xl:max-w-xl">
        Aumentamos tus ventas con sistemas automatizados de publicidad digital en plataformas como{' '}
        <span className="font-semibold underline decoration-z-yellow">Google Ads</span>,{' '}
        <span className="font-semibold underline decoration-[#4285F4]">Meta Ads</span> y más...
      </p>
      {/* <SocialIcons /> */}
      <div className="flex flex-col items-center space-y-8">
        <Button size={'lg'} variant={'default'} className="text-lg">
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
            <path d="m9.013 13-.962-.954 3.34-3.35H2V7.304h9.392L8.05 3.96 9.013 3 14 8l-4.987 5Z" fill="currentFill" />
          </svg>
        </Button>
        <div className="grid items-start justify-center gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#ffcf47] to-[#4285F4] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Button
              size={'lg'}
              variant={'link'}
              className="items-cente relative flex rounded-3xl  border-0 bg-black px-7 py-4 text-lg leading-none "
            >
              Suscríbete a nuestro newsletter
            </Button>
          </div>
        </div>
      </div>
      <Processes />
    </section>
  );
}
