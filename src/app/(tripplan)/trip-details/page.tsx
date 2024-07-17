'use client';
import ModalConfirmParticipation from '@/app/components/trip-details/modal-confirm-participation';
import ModalCreateActivity from '@/app/components/trip-details/modal-create-activity';
import ModalRegisterLink from '@/app/components/trip-details/modal-register-link';
import CardChecked from '@/app/components/trip-details/card-checked';
import { useTripDetails } from '@/app/context/trip-details-context';
import ButtonCreateActivity from '@/app/components/trip-details/buttons/button-create-activity';
import ButtonRegisterLink from '@/app/components/trip-details/buttons/button-register-link';
import ButtonManageGuests from '@/app/components/trip-details/buttons/button-manage-guests';
import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Settings2,
} from 'lucide-react';

export default function TripDetailsPage() {
  const {
    buttonCreateActivityOpen,
    buttonRegisterLinkOpen,
    buttonManageGuestsOpen,
  } = useTripDetails();

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
      <main className="flex px-6 gap-16">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Atividades</h1>
            <ButtonCreateActivity />
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
                <span className="text-zinc-500  text-xs ml-1">
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
        <div className="flex flex-col gap-6 w-[320px]">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl">Links importantes</h2>

            <div className="flex items-center justify-between gap-3 flex-1">
              <div className="flex flex-col text-ellipsis overflow-hidden">
                <span>Reserva do AirBnb</span>
                <a
                  href="https://www.airbnb.com.br"
                  target="_blank"
                  className="text-sm text-zinc-500 truncate max-w-[250px] hover:text-zinc-300"
                >
                  https://www.airbnb.com.br
                </a>
              </div>

              <Link2 className="text-zinc-400" />
            </div>
            <div className="flex items-center justify-between gap-3 flex-1">
              <div className="flex flex-col">
                <span>Reserva do AirBnb</span>
                <a
                  href="https://www.airbnb.com.br"
                  target="_blank"
                  className="text-sm text-zinc-500 truncate max-w-[250px] hover:text-zinc-300"
                >
                  https://www.airbnb.com.br
                </a>
              </div>

              <Link2 className="text-zinc-400" />
            </div>
            <ButtonRegisterLink />
          </div>
          <div className="border-t border-zinc-700" />
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl"> Convidados</h2>

            <div className="flex items-center justify-between gap-3">
              <div>
                <p>Jessica Rabelo</p>
                <span className="text-sm text-zinc-500">
                  jessicarabelo@gmail.com
                </span>
              </div>
              <CircleDashed />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p>Willyan Costa</p>
                <span className="text-sm text-zinc-500">
                  willyancr@gmail.com
                </span>
              </div>
              <CircleCheck className="text-lime-300" />
            </div>
            <ButtonManageGuests />
          </div>
        </div>
      </main>
      {buttonCreateActivityOpen && <ModalCreateActivity />}
      {buttonRegisterLinkOpen && <ModalRegisterLink />}
      {buttonManageGuestsOpen && <ModalConfirmParticipation />}
    </div>
  );
}
