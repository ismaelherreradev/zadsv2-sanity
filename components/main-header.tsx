import MainHeadline from './main-headline';
// import Processes from './sections/processes';

import Globe from '@/components/animation/globe';
import { Button } from './ui/button';

type MainheaderProps = {
  showParagraph?: boolean;
};

export default function Mainheader({ showParagraph = true }: MainheaderProps) {
  return (
    <section className="animate-mask-reveal container mx-auto min-h-fit transform-gpu pb-8">
      <MainHeadline />
      {showParagraph ? (
        <p className="mx-auto my-8 px-[5%] text-center text-lg font-normal leading-6 sm:my-10 sm:max-w-md sm:px-0 md:my-8 md:max-w-lg md:text-2xl md:leading-9 xl:max-w-xl">
          Aumentamos tus ventas con sistemas automatizados de publicidad digital en plataformas como{' '}
          <span className="font-semibold underline decoration-z-yellow">Google Ads</span>,{' '}
          <span className="font-semibold underline decoration-[#4285F4]">Meta Ads</span> y más...
        </p>
      ) : null}
      {/* <SocialIcons /> */}
      <div className="flex justify-center flex-wrap space-y-6 md:space-y-0 md:space-x-6">
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

        <Button size={'lg'} variant={'secondary'} className="text-lg">
          Suscríbete a nuestro newsletter
        </Button>
      </div>
      <div className="flex justify-center">
        <Globe />
      </div>
      {/* <Processes /> */}
    </section>
  );
}
