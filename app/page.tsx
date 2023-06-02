import Mainheader from '@/components/main-header';
import Benefits from '@/components/sections/benefits';
import GetInTouch from '@/components/sections/get-in-touch';
import Services from '@/components/sections/services';
import Why from '@/components/sections/why';

export default function IndexPage() {
  return (
    <section className="gap-6 pb-8 pt-6 md:py-10">
      <Mainheader />
      <Services />
      <Benefits />
      <Why />
      <GetInTouch />
    </section>
  );
}
