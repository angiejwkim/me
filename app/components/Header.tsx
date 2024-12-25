import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function Header() {
  return (
    <Link href="/" className="inline-block">
      <div className="flex items-center gap-2 text-4xl font-bold text-neutral-800 hover:text-neutral-600 transition-all duration-300">
        <RiArrowGoBackFill className="w-8 h-8 rotate-[-45deg]" />
        <span className="font-display">reroll</span>
      </div>
    </Link>
  );
}
