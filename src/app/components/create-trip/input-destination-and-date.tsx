'use client';

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import InputAddPeopleAndConfirm from './input-add-people-and-confirm';
import { useCreateTrip } from '@/app/context/create-trip-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ModalDate from './modal-date';
import { useEffect } from 'react';
import Button from '../button';
import * as z from 'zod';

const schema = z.object({
  destination: z
    .string()
    .min(2, { message: 'Destino obrigatório' }),

  date: z.string().min(1, { message: 'Data obrigatória' }),
});

export default function InputDestinationAndDate() {
  const {
    inputGuestsOpen,
    handleInputGuestsOpen,
    handleInputGuestClose,
    handleModalDateOpen,
    modalDateOpen,
    setDestination,
    displayInputDate,
  } = useCreateTrip();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue('date', displayInputDate || '');
  }, [displayInputDate, setValue]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl w-[740px]">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5" />
          <input
            {...register('destination')}
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent outline-none flex-1"
            onChange={(e) => setDestination(e.target.value)}
            disabled={inputGuestsOpen}
          />
        </div>

        <button
          onClick={handleModalDateOpen}
          className="flex items-center flex-1 gap-2"
          disabled={inputGuestsOpen}
        >
          <Calendar className="size-5" />
          <span {...register('date')}>{displayInputDate || 'Quando?'}</span>
        </button>

        {modalDateOpen && <ModalDate />}

        {inputGuestsOpen ? (
          <Button variant="secondary" onClick={handleInputGuestClose}>
            Alterar local/data
            <Settings2 />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit(handleInputGuestsOpen)}
          >
            Continuar
            <ArrowRight />
          </Button>
        )}
      </div>
      <div>
        <div className="flex ml-10 text-sm text-red-600/90">
          {errors.destination?.message && (
            <span>
              {typeof errors.destination?.message === 'string'
                ? errors.destination?.message
                : JSON.stringify(errors.destination?.message)}
            </span>
          )}
        </div>
        <div className="flex ml-10 text-sm text-red-600/90">
          {errors.date && (
            <span>
              {typeof errors.date.message === 'string'
                ? errors.date.message
                : JSON.stringify(errors.date.message)}
            </span>
          )}
        </div>
      </div>
      {inputGuestsOpen && <InputAddPeopleAndConfirm />}
    </div>
  );
}
