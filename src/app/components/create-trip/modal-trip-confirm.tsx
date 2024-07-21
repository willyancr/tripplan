import { useCreateTrip } from '@/app/context/create-trip-context';
import { CircleCheckBig, Mail, User, X } from 'lucide-react';
import Button from '../button';

export default function ModalTripConfirm() {
  const {
    handleModalGuestsConfirmClose,
    destination,
    setOwerName,
    createTrip,
    setOwerEmail,
    displayInputDate,
  } = useCreateTrip();

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">
              Confirmar criação da viagem
            </h1>
            <button onClick={handleModalGuestsConfirmClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-50 font-medium">{destination}</span> nas
            datas de{' '}
            <span className="text-zinc-50 font-medium">{displayInputDate}</span>{' '}
            preencha seus dados abaixo:
          </p>
        </header>

        <form onSubmit={createTrip} className="flex flex-col gap-3 ">
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setOwerName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setOwerEmail(e.target.value)}
            />
          </div>

          <Button variant="primary" size="full">
            Confirmar criação da viagem
            <CircleCheckBig className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
