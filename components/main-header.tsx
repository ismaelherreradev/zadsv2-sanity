import MainHeadline from './main-headline';

export default function Mainheader() {
  return (
    <section className="animate-mask-reveal container mx-auto min-h-screen transform-gpu  pb-8 pt-6 md:py-10">
      <MainHeadline />
      <p className="mx-auto mt-8 px-[5%] text-center text-lg font-normal leading-9 sm:mt-10 sm:max-w-md sm:px-0 md:mt-8 md:max-w-lg md:text-2xl xl:max-w-xl">
        Aumentamos tus ventas con sistemas automatizados de publicidad digital en plataformas como{' '}
        <span className="font-semibold underline decoration-[#F4B400]">Google Ads</span>,{' '}
        <span className="font-semibold underline decoration-[#4285F4]">Meta Ads</span> y más...
      </p>
    </section>
  );
}
