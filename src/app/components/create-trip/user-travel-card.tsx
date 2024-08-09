'use client';
import { Calendar, Earth } from 'lucide-react';
import ButtonLogin from '../button-login';
import { useSession } from 'next-auth/react';

export default function UserTravelCard() {
  const { data: session } = useSession();

  return session ? (
    <div>
      <div className="w-[800px] flex flex-col gap-3 text-left text-sm border border-zinc-700 rounded-lg p-4">
        <span className="text-zinc-100 text-lg">Suas viagens</span>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col gap-2 w-max px-4 py-2 bg-zinc-900 rounded-md">
            <span className="flex items-center gap-2 text-zinc-300">
              <Earth className="size-4" />
              Palmas
            </span>
            <span className="flex items-center gap-2 text-zinc-300">
              <Calendar className="size-4" />
              21 ago até 26 ago de 2024
            </span>
          </div>
          <div className="flex flex-col gap-2 w-max px-4 py-2 bg-zinc-900 rounded-md">
            <span className="flex items-center gap-2 text-zinc-300">
              <Earth className="size-4" />
              Palmas
            </span>
            <span className="flex items-center gap-2 text-zinc-300">
              <Calendar className="size-4" />
              21 ago até 26 ago de 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[550px] flex flex-col gap-2 text-left text-sm border border-zinc-700 rounded-lg p-4">
      <span className="text-zinc-100 text-lg">
        Personalize suas viagens do seu jeito.
      </span>
      <span className="text-zinc-400">
        Entre na sua conta para ter acesso ao registros das suas viagens de
        qualquer dispositivo, tornando o planejamento das próximas viagens muito
        mais simples.
      </span>
      <ButtonLogin className="w-32" />
    </div>
  );
}
