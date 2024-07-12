import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2">
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/aviao.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
          ></Image>
          <span className="font-dancing_script text-4xl">Tripplan</span>
        </Link>
      </div>
      <div>
        <button className="flex items-center gap-3 bg-zinc-800 px-4 py-2 rounded-full hover:brightness-75 transition-all">
          <FaGithub className="text-greenish-yellow" />
          <span className="text-sm">Sing in with Github</span>
        </button>
      </div>
    </header>
  );
}
