import { useTripDetails } from '@/app/context/trip-details-context';
import { UserCog2 } from 'lucide-react';

export default function ButtonManageGuests() {
  const { handleButtonManageGuestsOpen } = useTripDetails();
  return (
    <button
      onClick={handleButtonManageGuestsOpen}
      className="flex items-center justify-center gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all"
    >
      <UserCog2 className="size-4" />
      Gerenciar convidados
    </button>
  );
}
