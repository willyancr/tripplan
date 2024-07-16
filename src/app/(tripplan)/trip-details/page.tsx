import CardChecked from '@/app/components/trip-details/card-checked/page';
import {
  Calendar,
  CircleCheck,
  Link2,
  MapPin,
  Settings2,
  SquarePlus,
} from 'lucide-react';

export default function TripDetailsPage() {
  return (
    <div className="flex flex-col m-auto w-[1000px] mt-5 gap-8">
      <div className="flex gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl ">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="size-5" />
          <input
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent outline-none flex-1 "
          />
        </div>
        <div className="flex items-center gap-2 ">
          <Calendar className="size-5" />
          <input
            type="text"
            placeholder="Quando?"
            className="w-32 bg-transparent outline-none "
          />
        </div>
        <button className="flex gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all">
          Alterar local/data
          <Settings2 />
        </button>
      </div>
      <div className="flex px-6 gap-16">
        <div className="w-[60%] space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Atividades</h1>
            <button className="flex items-center gap-2 bg-greenish-yellow text-zinc-800 font-medium px-3 h-9 rounded-lg hover:brightness-75 transition-all">
              <SquarePlus className="size-4" />
              Cadastrar atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Dia 17
                <span className="text-zinc-500 text-sm ml-1"> Sábado</span>
              </p>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Dia 18
                <span className="text-zinc-500 text-sm ml-1"> Domingo</span>
              </p>
              <CardChecked activity="Corrida de Kart" hour="14:00" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-zinc-300">
                Dia 19
                <span className="text-zinc-500 text-sm ml-1">
                  Segunda-feira
                </span>
              </p>
              <CardChecked activity="Academia em grupo" hour="08:00" />
              <CardChecked activity="Almoço" hour="12:00" />
              <CardChecked activity="Jogatina" hour="18:00" />
              <CardChecked activity="Jantar" hour="21:00" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h2>Links importantes</h2>

            <div className="flex items-center justify-between gap-3">
              <a href="https://www.airbnb.com.br/" target="_blank">
                <p className="text-zinc-300">Reserva do AirBnb</p>
                <span className="text-sm text-zinc-500 whitespace-nowrap truncate ">
                  https://www.airbnb.com.br
                </span>
              </a>
              <Link2 className="text-zinc-400" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <a href="https://www.airbnb.com.br/" target="_blank">
                <p className="text-zinc-300">Reserva do AirBnb</p>
                <span className="text-sm text-zinc-500 whitespace-nowrap truncate ">
                  https://www.airbnb.com.br
                </span>
              </a>
              <Link2 className="text-zinc-400" />
            </div>
            <button className="flex items-center gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all">
              <SquarePlus className="size-4" />
              Cadastrar novo link
            </button>
          </div>
          <div className="border-t border-zinc-700" />
          <div>
            <h2>Convidados</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
