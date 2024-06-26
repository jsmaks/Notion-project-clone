import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="itesm-center fixed top-0 flex h-14 w-full border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="ml-auto flex items-center justify-between space-x-4 md:block md:w-auto">
          <Button size={'sm'} variant={'outline'} asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size={'sm'} asChild>
            <Link href="/sign-up"> Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
