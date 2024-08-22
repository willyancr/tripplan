import { useTripDetails } from "@/app/context/trip-details-context";
import { api } from "@/app/lib/axixos";
import { ptBR } from "date-fns/locale";
import { Earth, Calendar, Settings2 } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";

import ModalUpdateDestinationDate from "../trip-details/modal-update-destination-date";
import Button from "../button";

export interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export default function MobileDestinationDateTripDetail({
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
    <div className="space-y-3 sm:hidden">
      <div className="flex w-[300px] flex-col gap-2 rounded-md bg-zinc-900 px-4 py-2 sm:hidden">
        <span className="flex items-center gap-2 text-zinc-300">
          <Earth className="size-4" />
          {trip?.destination}
        </span>
        <span className="flex items-center gap-2 text-zinc-300">
          <Calendar className="size-4" />
          {displayDate}
        </span>
      </div>
      <Button variant="secondary" onClick={handleButtonUpdateDestinationOpen}>
        Alterar local/data
        <Settings2 />
      </Button>
      {buttonUpdateDestinationOpen && (
        <ModalUpdateDestinationDate params={params} setTrip={setTrip} />
      )}
    </div>
  );
}
