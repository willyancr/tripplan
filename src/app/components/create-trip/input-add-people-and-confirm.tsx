'use client';

import ModalTripConfirm from './modal-trip-confirm';
import ModalGuest from './modal-guest';
import { ArrowRight, UserRoundPlus } from 'lucide-react';
import { useCreateTrip } from '@/app/context/create-trip-context';

export default function InputAddPeopleAndConfirm() {
  const {
    handleModalGuestsOpen,
    handleModalGuestsConfirmOpen,
    emailInvited,
    modalGuestsConfirm,
    modalGuestsOpen,
  } = useCreateTrip();
  return (
    <div>
      <div className="flex items-center justify-between gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl">
        <button onClick={handleModalGuestsOpen} className="flex gap-2">
          <UserRoundPlus className="size-5" />
          {emailInvited.length > 0 ? (
            <span className="text-zinc-100">
              {emailInvited.length === 1
                ? '1 pessoa convidada'
                : `${emailInvited.length} pessoas convidadas`}{' '}
            </span>
          ) : (
            <span>Quem estará na viagem?</span>
          )}
        </button>

        <button
          onClick={handleModalGuestsConfirmOpen}
          className="flex gap-2 bg-greenish-yellow text-zinc-900 font-semibold px-4 py-2 rounded-lg hover:brightness-75 transition-all"
        >
          Confirmar a viagem <ArrowRight />{' '}
        </button>
      </div>
      {modalGuestsOpen && <ModalGuest />}
      {modalGuestsConfirm && <ModalTripConfirm />}
    </div>
  );
}
