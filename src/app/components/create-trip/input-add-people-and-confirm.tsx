'use client';

import { useCreateTrip } from '@/app/context/create-trip-context';
import { ArrowRight, UserRoundPlus } from 'lucide-react';
import ModalTripConfirm from './modal-trip-confirm';
import ModalGuest from './modal-guest';
import Button from '../button';

export default function InputAddPeopleAndConfirm() {
  const {
    handleModalGuestsOpen,
    handleModalGuestsConfirmOpen,
    personInvited,
    modalGuestsConfirm,
    modalGuestsOpen,
  } = useCreateTrip();
  return (
    <div>
      <div className="flex items-center justify-between gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl">
        <button onClick={handleModalGuestsOpen} className="flex gap-2">
          <UserRoundPlus className="size-5" />
          {personInvited.length > 0 ? (
            <span className="text-zinc-100">
              {personInvited.length === 1
                ? '1 pessoa convidada'
                : `${personInvited.length} pessoas convidadas`}{' '}
            </span>
          ) : (
            <span>Quem estará na viagem?</span>
          )}
        </button>
        <Button variant="primary" onClick={handleModalGuestsConfirmOpen}>
          Confirmar a viagem
          <ArrowRight />
        </Button>
      </div>
      {modalGuestsOpen && <ModalGuest />}
      {modalGuestsConfirm && <ModalTripConfirm />}
    </div>
  );
}
