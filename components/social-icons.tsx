import { Icons } from './icons';

export default function SocialIcons() {
  return (
    <div className="min-h-14 relative mx-auto my-14 flex max-w-2xl items-center">
      <div className="relative grid w-full grid-cols-3">
        <div className="relative flex scale-100 items-center justify-center transition duration-1000 ease-out">
          <Icons.google className="h-14" />
        </div>
        <div className="relative flex scale-100 items-center justify-center transition duration-1000 ease-out">
          <Icons.googleAds className="h-14" />
        </div>
        <div className="relative flex scale-100 items-center justify-center transition duration-1000 ease-out">
          <Icons.meta className="h-14" />
        </div>
      </div>
    </div>
  );
}
