import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] w-[600px] m-auto gap-10 text-center">
      <div className="flex gap-4 items-center">
        <h1 className="text-4xl">Planeje uma nova viagem </h1>
        <Image
          src="/aviao.png"
          alt="Logo"
          width={50}
          height={50}
          quality={100}
        ></Image>
      </div>
      <div className="flex items-center gap-2 bg-zinc-800 px-4 py-1 rounded-lg text-zinc-400">
        <MapPin size={52} />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="w-full bg-zinc-800 p-1 outline-none "
        />
        <input
          type="date"
          placeholder="Quando?"
          className="w-[350px] bg-zinc-800 p-1 outline-none "
        />
        <button className="flex gap-2 bg-greenish-yellow text-zinc-900 font-semibold px-4 py-2 rounded-lg hover:brightness-75 transition-all">
          Continuar <ArrowRight />{' '}
        </button>
      </div>
      <p className="text-gray-400 text-sm">
        Ao planejar sua viagem pela Tripplan você automaticamente concorda com
        nossos{' '}
        <span className="text-greenish-yellow underline">termos de uso</span> e{' '}
        <span className="text-greenish-yellow underline">
          politicas de privacidade
        </span>{' '}
      </p>
    </div>
  );
}
