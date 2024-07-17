'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { Link2, SquarePlus } from 'lucide-react';
import ModalRegisterLink from './modal-register-link';

export default function ImportantLinks() {
  const { handleButtonRegisterLinkOpen, buttonRegisterLinkOpen } =
    useTripDetails();
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Links importantes</h2>

      <div className="flex items-center justify-between gap-3 flex-1">
        <div className="flex flex-col text-ellipsis overflow-hidden">
          <span>Reserva do AirBnb</span>
          <a
            href="https://www.airbnb.com.br"
            target="_blank"
            className="text-sm text-zinc-500 truncate max-w-[250px] hover:text-zinc-300"
          >
            https://www.airbnb.com.br
          </a>
        </div>

        <Link2 className="text-zinc-400" />
      </div>
      <div className="flex items-center justify-between gap-3 flex-1">
        <div className="flex flex-col">
          <span>Reserva do AirBnb</span>
          <a
            href="https://www.airbnb.com.br"
            target="_blank"
            className="text-sm text-zinc-500 truncate max-w-[250px] hover:text-zinc-300"
          >
            https://www.airbnb.com.br
          </a>
        </div>

        <Link2 className="text-zinc-400" />
      </div>
      <button
        onClick={handleButtonRegisterLinkOpen}
        className="flex items-center justify-center gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all"
      >
        <SquarePlus className="size-4" />
        Cadastrar novo link
      </button>
      {buttonRegisterLinkOpen && <ModalRegisterLink />}
    </div>
  );
}
