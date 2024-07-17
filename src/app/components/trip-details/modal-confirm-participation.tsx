'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { CircleCheckBig, Mail, User, X } from 'lucide-react';
import Button from '../button';

export default function ModalConfirmParticipation() {
  const { handleButtonManageGuestsClose } = useTripDetails();
  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">Confirmar participação</h1>
            <button onClick={handleButtonManageGuestsClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Você foi convidado(a) para participar de uma viagem para
            <span className="text-zinc-50"> Florianópolis, Brasil</span> nas
            datas de{' '}
            <span className="text-zinc-50">16 a 27 de Agosto de 2024.</span>{' '}
          </p>
          <p className="text-sm text-zinc-400">
            Para confirmar sua presença na viagem, preencha os dados abaixo:
          </p>
        </header>

        <form className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent outline-none"
            />
          </div>
          <Button variant="primary" size="full">
            Confirmar minha presença
            <CircleCheckBig className="text-zinc-900 size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
