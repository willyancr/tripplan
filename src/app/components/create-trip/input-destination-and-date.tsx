'use client';

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import { useCreateTrip } from '@/app/context/create-trip-context';
import InputAddPeopleAndConfirm from './input-add-people-and-confirm';
import Button from '../button';

export default function InputDestinationAndDate() {
  const { inputGuestsOpen, handleInputGuestsOpen, handleInputGuestClose } =
    useCreateTrip();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl w-[700px]">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5" />
          <input
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent outline-none flex-1 "
            disabled={inputGuestsOpen}
          />
        </div>
        <div className="flex items-center gap-2 ">
          <Calendar className="size-5" />
          <input
            type="text"
            placeholder="Quando?"
            className="w-32 bg-transparent outline-none "
            disabled={inputGuestsOpen}
          />
        </div>
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
