'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/research', label: 'Research' },
    { href: '/music', label: 'Music' },
    { href: '/visual-art', label: 'Visual Art' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 right-0 z-50">
      <div className="px-8 py-8">
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wider transition-all ${
                pathname === link.href 
                  ? 'text-white opacity-100' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}