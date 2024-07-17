import { Calendar, MapPin, Settings2 } from 'lucide-react';
import Button from '../button';

export default function InputDestinationAndDateTripDetails() {
  return (
    <div className="flex gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2x">
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
      <Button variant="secondary">
        Alterar local/data
        <Settings2 />
      </Button>
    </div>
  );
}
