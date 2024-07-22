'use client';
import { api } from '@/app/lib/axixos';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../button';

interface Trip {
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
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api
      .get(`http://localhost:3333/trips/${params.slug}`)
      .then((response) => setTrip(response.data.trip));
  }, [params.slug]);

  const displayDate = trip
    ? format(trip.starts_at, "dd 'de' MMM", { locale: ptBR })
        .concat(' até ')
        .concat(format(trip.ends_at, "dd 'de' MMM"))
    : null;

  return (
    <div className="flex gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2x">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5" />
        <span>{trip?.destination}</span>
      </div>
      <div className="flex items-center gap-2 flex-1">
        <Calendar className="size-5" />
        <span>{displayDate}</span>
      </div>
      <Button variant="secondary">
        Alterar local/data
        <Settings2 />
      </Button>
    </div>
  );
}
