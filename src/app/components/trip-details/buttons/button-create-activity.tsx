'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { SquarePlus } from 'lucide-react';

export default function ButtonCreateActivity() {
  const { handleButtonCreateActivityOpen } = useTripDetails();

  return (
    <button
      onClick={handleButtonCreateActivityOpen}
      className="flex items-center gap-2 bg-greenish-yellow text-zinc-800 font-medium px-3 h-9 rounded-lg hover:brightness-75 transition-all"
    >
      <SquarePlus className="size-4" />
      Cadastrar atividade
    </button>
  );
}
