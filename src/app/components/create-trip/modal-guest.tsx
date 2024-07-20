import { useCreateTrip } from '@/app/context/create-trip-context';
import {
  CheckCircleIcon,
  Mail,
  SquarePlus,
  X
} from 'lucide-react';
import Button from '../button';

export default function ModalGuest() {
  const {
    handleModalGuestsClose,
    handleEmailInvited,
    handleRemoveEmailInvited,
    emailInvited,
  } = useCreateTrip();
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">Selecionar Convidados</h1>
            <button onClick={handleModalGuestsClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </header>
        <div className="flex flex-wrap gap-1 mb-5">
          {emailInvited.map((email) => (
            <div
              className="flex gap-2 items-center bg-zinc-800 text-zinc-200 font-medium px-2 py-1 rounded-md text-sm"
              key={email}
            >
              <span>{email}</span>
              <button onClick={() => handleRemoveEmailInvited(email)}>
                <X className="text-zinc-400 size-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="border border-zinc-800 mb-5"></div>

        <form
          onSubmit={handleEmailInvited}
          className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl"
        >
          <div className="flex items-center gap-2 flex-1">
            <Mail className="size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent outline-none flex-1 "
            />
          </div>
          <Button variant="primary">
            Convidar
            <SquarePlus className="size-5" />
          </Button>
          <Button variant="secondary" onClick={handleModalGuestsClose}>
            Finalizar
            <CheckCircleIcon className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
