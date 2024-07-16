import { Route } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center mt-20 w-[600px] mx-auto gap-10">
      <h1 className="text-5xl text-center font-bold leading-[1.2]">
        Sua jornada perfeita começa aqui
      </h1>
      <p className="text-center text-gray-300">
        Convide seus amigos e programe, personalize e otimize seus planos de
        viagem com nosso planejador. Perfeito para férias, viagens de negócios e
        atividades diárias.
      </p>
      <Link href="/create-trip">
        <div className="flex items-center gap-2 w-60 bg-greenish-yellow text-zinc-900 font-semibold px-4 py-4 rounded-full hover:brightness-75 transition-all">
          <Route className="text-zinc-900" />
          <span className="text-sm">Criar uma nova viagem</span>
        </div>
      </Link>
      <Image
        src='/trip-cuate.png'
        alt="Logo"
        width={600}
        height={300}
        quality={100}
      >
      </Image>
    </div>
  );
}
