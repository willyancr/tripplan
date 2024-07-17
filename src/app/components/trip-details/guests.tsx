'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { CircleCheck, CircleDashed, UserCog2 } from 'lucide-react';
import ModalConfirmParticipation from './modal-confirm-participation';

export default function Guests() {
  const { handleButtonManageGuestsOpen, buttonManageGuestsOpen } =
    useTripDetails();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl"> Convidados</h2>

      <div className="flex items-center justify-between gap-3">
        <div>
          <p>Jessica Rabelo</p>
          <span className="text-sm text-zinc-500">jessicarabelo@gmail.com</span>
        </div>
        <CircleDashed />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p>Willyan Costa</p>
          <span className="text-sm text-zinc-500">willyancr@gmail.com</span>
        </div>
        <CircleCheck className="text-lime-300" />
      </div>
      <button
        onClick={handleButtonManageGuestsOpen}
        className="flex items-center justify-center gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all"
      >
        <UserCog2 className="size-4" />
        Gerenciar convidados
      </button>
      {buttonManageGuestsOpen && <ModalConfirmParticipation />}
    </div>
  );
}
