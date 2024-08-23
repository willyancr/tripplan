"use client";
import { useTripDetails } from "@/app/context/trip-details-context";
import { CircleCheckBig, Mail, User, X } from "lucide-react";
import Button from "../button";
import { api } from "@/app/lib/axixos";
import { FormEvent, useState } from "react";
import { useCreateTrip } from "@/app/context/create-trip-context";
import { Participants } from "./guests";
import toast from "react-hot-toast";

export default function ModalAddGuest({
  params,
  setParticipants,
}: {
  params: { slug: string };
  setParticipants: (participants: Participants[]) => void;
}) {
  const { handleButtonManageGuestsClose } = useTripDetails();
  const { destination, displayInputDate } = useCreateTrip();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const createParticipation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!email) {
      toast.error("Email obrigatório");
      return;
    }

    const inviteParticipant = api.post(`/trips/${params.slug}/invite`, {
      name: name,
      email: email,
    });

    toast
      .promise(
        inviteParticipant
          .then(() => api.get(`/trips/${params.slug}/participants`))
          .then((response) => {
            setParticipants(response.data.participants);
            handleButtonManageGuestsClose();
          }),
        {
          loading: "Adicionando convidado...",
          success: "Convidado adicionado com sucesso!",
          error: "Erro ao convidar o convidado.",
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-[350px] animate-modal rounded-lg bg-zinc-900 px-6 py-5 text-left drop-shadow-2xl sm:w-[640px]">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300">
              Adicionar convidado
            </h1>
            <button onClick={handleButtonManageGuestsClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Enviar convite para participar de uma viagem para
            <span className="text-zinc-50"> {destination}</span> nas datas de{" "}
            <span className="text-zinc-50">{displayInputDate}</span>
          </p>
          <p className="text-sm text-zinc-400">Preencha os dados abaixo:</p>
        </header>

        <form onSubmit={createParticipation} className="flex flex-col gap-3">
          <div className="flex h-12 items-center gap-2 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Nome completo"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex h-12 items-center gap-2 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {loading ? (
            <Button variant="primary" size="full" disabled>
              Adicionar novo convidado
              <CircleCheckBig className="size-5 text-zinc-900" />
            </Button>
          ) : (
            <Button variant="primary" size="full">
              Adicionar novo convidado
              <CircleCheckBig className="size-5 text-zinc-900" />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
