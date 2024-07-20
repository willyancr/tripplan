'use client';

import { useCreateTrip } from '@/app/context/create-trip-context';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import Button from '../button';
import InputAddPeopleAndConfirm from './input-add-people-and-confirm';
import ModalDate from './modal-date';

export default function InputDestinationAndDate() {
  const {
    inputGuestsOpen,
    handleInputGuestsOpen,
    handleInputGuestClose,
    handleModalDateOpen,
    modalDateOpen,
    dateRage,
  } = useCreateTrip();

  const displayInputDate =
    dateRage && dateRage.from && dateRage.to
      ? format(dateRage.from, "dd 'de' MMM", { locale: ptBR })
          .concat(' até ')
          .concat(format(dateRage.to, "dd 'de' MMM", { locale: ptBR }))
      : null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl w-[740px]">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5" />
          <input
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent outline-none flex-1"
            disabled={inputGuestsOpen}
          />
        </div>
        <button
          onClick={handleModalDateOpen}
          className="flex items-center flex-1 gap-2"
          disabled={inputGuestsOpen}
        >
          <Calendar className="size-5" />
          <span>{displayInputDate || 'Quando?'}</span>
        </button>

        {modalDateOpen && <ModalDate />}

        {inputGuestsOpen ? (
          <Button variant="secondary" onClick={handleInputGuestClose}>
            Alterar local/data
            <Settings2 />
          </Button>
        ) : (
          <Button variant="primary" onClick={handleInputGuestsOpen}>
            Continuar
            <ArrowRight />
          </Button>
        )}
      </div>
      {inputGuestsOpen && <InputAddPeopleAndConfirm />}
    </div>
  );
}
