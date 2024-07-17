'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import ModalCreateActivity from './modal-create-activity';
import { SquarePlus } from 'lucide-react';
import CardChecked from './card-checked';
import Button from '../button';

export default function Activitys() {
  const { handleButtonCreateActivityOpen, buttonCreateActivityOpen } =
    useTripDetails();

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Atividades</h1>
        <Button
          onClick={handleButtonCreateActivityOpen}
          className="flex items-center gap-2 bg-greenish-yellow text-zinc-800 font-medium px-3 h-9 rounded-lg hover:brightness-75 transition-all"
        >
          <SquarePlus className="size-4" />
          Cadastrar atividade
        </Button>
      </div>
      <div className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-zinc-300">
            Dia 17
            <span className="text-zinc-500 text-xs ml-1"> Sábado</span>
          </p>
          <p className="text-zinc-500 text-sm">
            Nenhuma atividade cadastrada nessa data.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zinc-300">
            Dia 18
            <span className="text-zinc-500  text-xs ml-1"> Domingo</span>
          </p>
          <CardChecked activity="Corrida de Kart" hour="14:00" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zinc-300">
            Dia 19
            <span className="text-zinc-500  text-xs ml-1">Segunda-feira</span>
          </p>
          <CardChecked activity="Academia em grupo" hour="08:00" />
          <CardChecked activity="Almoço" hour="12:00" />
          <CardChecked activity="Jogatina" hour="18:00" />
          <CardChecked activity="Jantar" hour="21:00" />
        </div>
      </div>
      {buttonCreateActivityOpen && <ModalCreateActivity />}
    </div>
  );
}
