import InputDestinationAndDate from '@/app/components/create-trip/input-destination-and-date';
import Image from 'next/image';

export default function CreateTripPage() {

  
  return (
    <div className="flex flex-col items-center justify-center h-[600px] max-w-[600px] m-auto gap-10 text-center">
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
      <InputDestinationAndDate />
      <p className="text-gray-400 text-sm">
        Ao planejar sua viagem pela Tripplan você automaticamente concorda{' '}
        <br />
        com nossos{' '}
        <span className="text-greenish-yellow underline">
          termos de uso
        </span> e{' '}
        <span className="text-greenish-yellow underline">
          politicas de privacidade.
        </span>{' '}
      </p>
    </div>
  );
}
