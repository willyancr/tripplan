import { Route } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto flex flex-col items-center gap-10 sm:w-[600px]">
      <h1 className="text-center text-2xl font-bold leading-[1.2] sm:text-5xl">
        Sua jornada perfeita começa aqui
      </h1>
      <p className="text-center text-gray-300">
        Convide seus amigos e programe, personalize e otimize seus planos de
        viagem com nosso planejador. Perfeito para férias, viagens de negócios e
        atividades diárias.
      </p>
      <Link href="/create-trip">
        <div className="flex w-60 items-center gap-2 rounded-full bg-greenish-yellow px-4 py-4 font-semibold text-zinc-900 transition-all hover:brightness-75">
          <Route className="text-zinc-900" />
          <span className="text-sm">Criar uma nova viagem</span>
        </div>
      </Link>
      <Image
        src="/trip-cuate.png"
        alt="Logo"
        width={360}
        height={200}
        quality={100}
      ></Image>
    </div>
  );
}
