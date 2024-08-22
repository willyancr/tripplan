"use client";
import { useTripDetails } from "@/app/context/trip-details-context";
import { api } from "@/app/lib/axixos";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../button";
import ModalUpdateDestinationDate from "./modal-update-destination-date";
import MobileDestinationDateTripDetail from "../mobile/mobile-destination-date-trip-detail";

export interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export default function InputDestinationAndDateTripDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonUpdateDestinationOpen, buttonUpdateDestinationOpen } =
    useTripDetails();
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api
      .get(`/trips/${params.slug}`)
      .then((response) => setTrip(response.data.trip));
  }, [params.slug]);

  const displayDate = trip
    ? format(trip.starts_at, "dd 'de' MMM", { locale: ptBR })
        .concat(" até ")
        .concat(format(trip.ends_at, "dd 'de' MMM", { locale: ptBR }))
    : null;

  return (
    <>
      <MobileDestinationDateTripDetail params={params} />
      <div className="drop-shadow-2x hidden gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-400 sm:flex">
        <div className="flex flex-1 items-center gap-2">
          <MapPin className="size-5" />
          <span>{trip?.destination}</span>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Calendar className="size-5" />
          <span>{displayDate}</span>
        </div>
        <Button variant="secondary" onClick={handleButtonUpdateDestinationOpen}>
          Alterar local/data
          <Settings2 />
        </Button>
        {buttonUpdateDestinationOpen && (
          <ModalUpdateDestinationDate params={params} setTrip={setTrip} />
        )}
      </div>
    </>
  );
}
