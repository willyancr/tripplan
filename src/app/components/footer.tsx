import Link from "next/link";
import Image from "next/image";
import TermsOfUse from "./create-trip/terms-of-use";

export default function Footer() {
  return (
    <div className="space-y-10 border-t-[1px] border-zinc-700 py-10 sm:flex sm:justify-between sm:space-y-0">
      <div className="flex w-80 flex-col justify-center gap-3 sm:text-left">
        <Link href="/" className="flex size-10 items-center gap-1">
          <Image
            src="/aviao.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
          />
          <span className="font-dancing_script text-4xl text-zinc-400">
            Tripplan
          </span>
        </Link>
        <p className="text-sm italic text-zinc-400">
          Transforme a sua próxima viagem numa experiência sem complicações com
          o Tripplan.
        </p>
      </div>
      <div className="flex gap-2 sm:gap-20">
        <div className="flex flex-col text-center">
          <span className="text-greenish-yellow">Infos:</span>
          <TermsOfUse />
        </div>
        <div className="flex flex-col text-center">
          <span className="text-greenish-yellow">Suporte:</span>
          <a href="mailto:willyancr@gmail.com" className="text-zinc-400">
            Contactar-nos
          </a>
        </div>
      </div>
    </div>
  );
}
