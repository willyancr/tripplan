'use client';

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import { useModal } from '@/app/context/modal-context';
import InputConfirm from '../input-confirm/page';

export default function InputContinue() {
  const { inputGuestsOpen, handleInputGuestsOpen, handleInputGuestClose } =
    useModal();

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
          <button
            onClick={handleInputGuestClose}
            className="flex gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all"
          >
            Alterar local/data
            <Settings2 />
          </button>
        ) : (
          <button
            onClick={handleInputGuestsOpen}
            className="flex gap-2 bg-greenish-yellow text-zinc-900 font-semibold px-4 py-2 rounded-lg hover:brightness-75 transition-all"
          >
            Continuar
            <ArrowRight />
          </button>
        )}
      </div>
      {inputGuestsOpen && <InputConfirm />}
    </div>
  );
}
