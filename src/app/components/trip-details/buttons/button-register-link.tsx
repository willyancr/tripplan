import { useTripDetails } from '@/app/context/trip-details-context';
import { SquarePlus } from 'lucide-react';

export default function ButtonRegisterLink() {
  const { handleButtonRegisterLinkOpen } = useTripDetails();
  return (
    <button
      onClick={handleButtonRegisterLinkOpen}
      className="flex items-center justify-center gap-2 bg-zinc-700 text-zinc-100 font-medium px-4 py-2 rounded-lg hover:brightness-75 transition-all"
    >
      <SquarePlus className="size-4" />
      Cadastrar novo link
    </button>
  );
}
