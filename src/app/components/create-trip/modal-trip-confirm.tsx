import { useCreateTrip } from '@/app/context/create-trip-context';
import { CircleCheckBig, Mail, User, X } from 'lucide-react';
import Link from 'next/link';

export default function ModalTripConfirm() {
  const { handleModalGuestsConfirmClose } = useCreateTrip();

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">
              Confirmar criação da viagem
            </h1>
            <button onClick={handleModalGuestsConfirmClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-50 font-medium">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="text-zinc-50 font-medium">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </header>

        <form className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-14 rounded-lg text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-14 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent outline-none"
            />
          </div>
          <Link href="/trip-details">
            <button className="w-full flex items-center justify-center gap-2 bg-greenish-yellow text-zinc-900  px-4 py-2 rounded-lg hover:brightness-75 transition-all">
              Confirmar criação da viagem
              <CircleCheckBig className="text-zinc-900 size-5" />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
