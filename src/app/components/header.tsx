import ButtonLogin from './button-login';
import Image from 'next/image';
import Link from 'next/link';

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
        <ButtonLogin />
      </div>
    </header>
  );
}
