import { useCreateTrip } from "@/app/context/create-trip-context";
import { CheckCircleIcon, Mail, SquarePlus, User2Icon, X } from "lucide-react";
import Button from "../button";

export default function ModalGuest() {
  const {
    handleModalGuestsClose,
    handlePersonInvited,
    handleRemovePersonInvited,
    personInvited,
  } = useCreateTrip();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-[640px] rounded-lg bg-zinc-900 px-6 py-5 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300">
              Selecionar Convidados
            </h1>
            <button onClick={handleModalGuestsClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </header>
        <div className="mb-5 flex flex-wrap gap-1">
          {personInvited.map((person) => (
            <div
              className="flex items-center gap-3 rounded-md bg-zinc-800 px-2 py-1 text-sm font-medium text-zinc-200"
              key={person.email}
            >
              <div className="flex flex-col">
                <span>{person.name}</span>
                <span className="text-zinc-400">{person.email}</span>
              </div>
              <button onClick={() => handleRemovePersonInvited(person.email)}>
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>
        <div className="mb-5 border border-zinc-800"></div>
        <form onSubmit={handlePersonInvited} className="space-y-3">
          <div className="flex flex-col gap-1">
            <div className="flex h-12 items-center gap-2 rounded-lg bg-black px-4 text-zinc-400 drop-shadow-2xl">
              <User2Icon className="size-5" />
              <input
                type="text"
                name="name"
                placeholder="Digite o nome do convidado"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
            <div className="flex h-12 items-center gap-2 rounded-lg bg-black px-4 text-zinc-400 drop-shadow-2xl">
              <Mail className="size-5" />
              <input
                type="email"
                placeholder="Digite o e-mail do convidado"
                className="flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="primary">
              Convidar
              <SquarePlus className="size-5" />
            </Button>
            <Button variant="secondary" onClick={handleModalGuestsClose}>
              Finalizar
              <CheckCircleIcon className="size-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
