'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { api } from '@/app/lib/axixos';
import { CircleCheck, CircleDashed, UserCog2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../button';
import ModalConfirmParticipation from './modal-confirm-participation';

interface Participants {
  id: string;
  name: string;
  email: string;
  is_confirmed: boolean;
}

export default function Guests({ params }: { params: { slug: string } }) {
  const { handleButtonManageGuestsOpen, buttonManageGuestsOpen } =
    useTripDetails();

  const [participants, setParticipants] = useState<Participants[]>();

  useEffect(() => {
    api
      .get(`/trips/${params.slug}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [params.slug]);

  return (
    <div className="flex flex-col gap-6 ">
      <h2 className="text-2xl"> Convidados</h2>

      {participants?.map((participant, index) => (
        <div
          key={participant.id}
          className="flex items-center justify-between gap-3"
        >
          <div>
            <p>{participant.name ?? `Convidado ${index}`}</p>
            <span className="text-sm text-zinc-500">{participant.email}</span>
          </div>

          {participant.is_confirmed ? (
            <CircleCheck className="size-5 text-lime-300" />
          ) : (
            <CircleDashed className="size-5 " />
          )}
        </div>
      ))}

      <Button variant="secondary" onClick={handleButtonManageGuestsOpen}>
        <UserCog2 className="size-4" />
        Gerenciar convidados
      </Button>
      {buttonManageGuestsOpen && <ModalConfirmParticipation params={params} />}
    </div>
  );
}
