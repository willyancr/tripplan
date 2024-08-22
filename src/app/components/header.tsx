import ButtonLogin from "./button-login";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-16 mt-5 flex items-center justify-between py-2">
      <div>
        <Link href="/" className="flex size-10 items-center gap-1">
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
      <div>
        <ButtonLogin />
      </div>
    </header>
  );
}
