'use client';
import { useCreateTrip } from '@/app/context/create-trip-context';
import { CheckCircleIcon, X } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import Button from '../button';

export default function ModalDate() {
  const { handleModalDateClose, dateRage, setDateRage } = useCreateTrip();
  

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[350px] rounded-lg py-5 px-6 text-left drop-shadow-2xl space-y-5">
        <header className="flex justify-between">
          <h1 className="text-lg font-medium text-zinc-300">
            Selecione a data
          </h1>
          <button onClick={handleModalDateClose}>
            <X className="text-zinc-400" />
          </button>
        </header>
        <div>
          <DayPicker
            captionLayout="dropdown-months"
            selected={dateRage}
            onSelect={setDateRage}
            mode="range"
            classNames={{
              today: `text-lime-300`,
              selected: `bg-greenish-yellow rounded-full text-zinc-800`,
              range_start: `bg-greenish-yellow rounded-full text-zinc-800`,
              range_end: `bg-greenish-yellow rounded-full text-zinc-800`,
              range_middle: `bg-greenish-yellow rounded-full text-zinc-800`,
              chevron: `fill-greenish-yellow`,
            }}
          />
        </div>
        <Button variant="primary" onClick={handleModalDateClose}>
          Finalizar
          <CheckCircleIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
}
