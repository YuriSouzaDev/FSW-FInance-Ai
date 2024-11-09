'use client';

import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-start items-center px-8 py-4 border-b border-solid">
      <Image
        src={'/complete_logo.svg'}
        alt="Finance AILogo"
        width={173}
        height={39}
      />
      <div className="flex items-center gap-10 px-12 py-[11px]">
        <Link
          href={'/'}
          className={
            pathname === '/'
              ? 'text-primary font-bold'
              : 'font-semibold text-[#71717A] hover:text-primary transition duration-300'
          }
        >
          Dashboard
        </Link>
        <Link
          href={'/transactions'}
          className={
            pathname === '/transactions'
              ? 'text-primary font-bold'
              : 'font-semibold text-[#71717A] hover:text-primary transition duration-300'
          }
        >
          Transações
        </Link>
        <Link
          href={'/subscription'}
          className={
            pathname === '/subscription'
              ? 'text-primary font-bold'
              : 'font-semibold text-[#71717A] hover:text-primary transition duration-300'
          }
        >
          Assinatura
        </Link>
      </div>
      <div className="ml-auto items-center">
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
