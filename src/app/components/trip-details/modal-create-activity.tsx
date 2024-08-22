import { useTripDetails } from "@/app/context/trip-details-context";
import { CircleCheckBig, Tag, X } from "lucide-react";
import Button from "../button";
import { api } from "@/app/lib/axixos";
import { FormEvent, useState } from "react";

export default function ModalCreateActivity({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonCreateActivityClose, setActivities } = useTripDetails();

  const [title, setTitle] = useState("");
  const [dateCreated, setDateCreated] = useState("");

  const createActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title) {
      alert("Digite a atividade");
      return;
    }
    if (!dateCreated) {
      alert("Digite data e horario");
      return;
    }

    api
      .post(`/trips/${params.slug}/activities`, {
        title: title,
        date_created: dateCreated,
      })
      .then(() => {
        // Fetch the updated list of activities
        return api.get(`/trips/${params.slug}/activities`);
      })
      .then((response) => {
        setActivities(response.data.activities);
        handleButtonCreateActivityClose();
      })
      .catch((error) => {
        console.error("Erro ao criar atividade:", error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-[350px] animate-modal rounded-lg bg-zinc-900 px-6 py-5 text-left drop-shadow-2xl sm:w-[640px]">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300">
              Cadastrar atividade
            </h1>
            <button onClick={handleButtonCreateActivityClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </header>

        <form onSubmit={createActivity} className="flex flex-col gap-3">
          <div className="flex h-12 items-center gap-3 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
            <Tag className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Qual a atividade?"
              className="w-full bg-transparent outline-none"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
              <input
                type="datetime-local"
                name="date"
                placeholder="Qual data?"
                className="w-full bg-transparent outline-none"
                onChange={(e) => setDateCreated(e.target.value)}
              />
            </div>
          </div>
          <Button variant="primary" size="full">
            Salvar atividade
            <CircleCheckBig className="size-5 text-zinc-900" />
          </Button>
        </form>
      </div>
    </div>
  );
}
