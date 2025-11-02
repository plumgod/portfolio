import Caustics from '@/components/Caustics';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Caustics background */}
      <div className="absolute inset-0">
        <Caustics />
      </div>
      
      {/* Name in bottom left - clickable to return home */}
      <Link href="/" className="fixed top-8 left-8 z-20">
        <h1 className="text-2xl font-light tracking-wider text-white/90 hover:text-white transition-colors">
          Austin Rockman
        </h1>
      </Link>
    </div>
  );
}