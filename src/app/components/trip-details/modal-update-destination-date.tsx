'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { api } from '@/app/lib/axixos';
import { CircleCheckBig, Link2, Tag, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import Button from '../button';
import { DayPicker } from 'react-day-picker';
import { useCreateTrip } from '@/app/context/create-trip-context';
import 'react-day-picker/style.css';

export default function ModalUpdateDestinationDate({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonUpdateDestinationClose } = useTripDetails();
  const { dateRage, setDateRage, setDestination, destination } =
    useCreateTrip();

  const updateTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!destination) alert('Digite um destino');
    if (!dateRage?.from || !dateRage?.to) alert('Digite uma data');

    api
      .put(`/trips/${params.slug}`, {
        destination: destination,
        starts_at: dateRage?.from,
        ends_at: dateRage?.to,
      })
      .then((response) => {
        handleButtonUpdateDestinationClose();
        return response.data;
      });
  };
  return (
    <div className="bg-black/70 fixed  inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[350px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300 ">
              Atualizar o local e a data
            </h1>
            <button onClick={handleButtonUpdateDestinationClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Digite o novo local e a nova data
          </p>
        </header>

        <form onSubmit={updateTrip} className="flex flex-col gap-7 ">
          <div className="flex items-center gap-3 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Tag className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Qual o novo destino?"
              className="w-full bg-transparent outline-none"
              onChange={(event) => setDestination(event.target.value)}
            />
          </div>
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
          <Button variant="primary" size="full">
            Atualizar
            <CircleCheckBig className="text-zinc-900 size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
