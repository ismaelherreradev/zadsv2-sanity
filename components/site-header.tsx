import { MainNav } from '@/components/main-nav';
import { siteConfig } from '@/config/site';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button size={'sm'} variant={'outline'} className="hidden md:flex">
              Contactanos
            </Button>
            <Button size={'sm'} variant={'secondary'}>
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
                ></path>
              </svg>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
