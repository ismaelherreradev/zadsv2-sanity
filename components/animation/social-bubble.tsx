import { Icons } from '../icons';

export default function SocialBubbleAnimation() {
  return (
    <div className="relative aspect-video lg:mx-0 lg:aspect-square">
      <div className="relative flex h-full flex-col overflow-y-hidden">
        <div className="z-10 flex min-w-full flex-[0_0_auto] flex-col items-center">
          <div className="bubble_leftRight group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.facebook className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight2 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.twitter className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight3 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.instagram className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight4 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.linkedin className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.youtube className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight2 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.google className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight3 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.googleAds className="h-12 w-12" />
          </div>
          <div className="bubble_leftRight4 group relative -left-4 flex aspect-square w-20 items-center justify-center overflow-hidden rounded-full border after:absolute after:inset-0 after:rounded-full sm:w-24 md:w-32">
            <Icons.wise className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
