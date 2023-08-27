'use client';
import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Headline from '@/components/Typography/Headline';
import { MENU } from './NavigationTab.constants';

function NavigationTab() {
  const pathname = usePathname();

  return (
    <nav className="mt-2 flex items-start gap-4">
      {MENU.map((menu) => (
        <Link
          href={menu.path}
          key={menu.id}
          onClick={() => {
            console.log(menu.path);
          }}
        >
          <Headline type="h4" color={pathname === menu.path ? 'secondary-900' : 'secondary-500'}>
            {menu.name}
          </Headline>
        </Link>
      ))}
    </nav>
  );
}

export default NavigationTab;
