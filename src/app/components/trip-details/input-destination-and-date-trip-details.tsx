import { useTripDetails } from '@/app/context/trip-details-context';
import { Calendar, MapPin, Settings2 } from 'lucide-react';
import Button from '../button';

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default async function InputDestinationAndDateTripDetails({
  params,
}: ParamsProps) {
  const { getInfosTrip } = useTripDetails();
  const { trip } = await getInfosTrip(params.slug);

  return (
    <div className="flex gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2x">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5" />
        <span>{trip.destination}</span>
      </div>
      <div className="flex items-center gap-2 ">
        <Calendar className="size-5" />
        <span>teste</span>
      </div>
      <Button variant="secondary">
        Alterar local/data
        <Settings2 />
      </Button>
    </div>
  );
}
