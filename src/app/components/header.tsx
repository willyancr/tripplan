import ButtonLogin from "./button-login";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-16 flex items-center justify-center py-2 sm:justify-between">
      <div>
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/aviao.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
          />
          <span className="font-dancing_script text-4xl">Tripplan</span>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ButtonLogin />
      </div>
    </header>
  );
}
