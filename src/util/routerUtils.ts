'use client';
import { usePathname, useRouter } from 'next/navigation';

export const isCurrentRoute = (href: string): boolean => {
  const pathname = usePathname();
  return pathname === href;
};
