"use client";
import { useTripDetails } from "@/app/context/trip-details-context";
import { api } from "@/app/lib/axixos";
import { CircleCheck, CircleDashed, UserCog2, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../button";
import ModalAddGuest from "./modal-add-guest";
import ItemActionButton from "./item-action-button";

export interface Participants {
  id: string;
  name: string;
  email: string;
  is_confirmed: boolean;
}

export default function Guests({ params }: { params: { slug: string } }) {
  const {
    handleDeleteGuest,
    handleButtonManageGuestsOpen,
    buttonManageGuestsOpen,
  } = useTripDetails();

  const [participants, setParticipants] = useState<Participants[]>();

  useEffect(() => {
    api
      .get(`/trips/${params.slug}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [params.slug]);

  return (
    <div className="mb-5 flex w-[300px] flex-col gap-6 sm:w-full">
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
          <div className="flex gap-2">
            {participant.is_confirmed ? (
              <CircleCheck className="size-5 text-lime-300" />
            ) : (
              <CircleDashed className="size-5" />
            )}
            <ItemActionButton
              onClick={() =>
                handleDeleteGuest({
                  slug: params.slug,
                  participantID: participant.id,
                  setParticipants,
                })
              }
            >
              <X className="size-3 text-zinc-400" />{" "}
            </ItemActionButton>
          </div>
        </div>
      ))}

      <Button variant="secondary" onClick={handleButtonManageGuestsOpen}>
        <UserCog2 className="size-4" />
        Gerenciar convidados
      </Button>
      {buttonManageGuestsOpen && (
        <ModalAddGuest params={params} setParticipants={setParticipants} />
      )}
    </div>
  );
}
