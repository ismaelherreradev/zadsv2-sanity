import Mainheader from '@/components/main-header';
import Services from '@/components/sections/services';

export default function IndexPage() {
  return (
    <section className="gap-6 pb-8 pt-6 md:py-10">
      <Mainheader />
      <Services />
    </section>
  );
}
