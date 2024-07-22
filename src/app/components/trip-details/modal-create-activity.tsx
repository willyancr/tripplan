import { useTripDetails } from '@/app/context/trip-details-context';
import { CircleCheckBig, Tag, X } from 'lucide-react';
import Button from '../button';
import { api } from '@/app/lib/axixos';
import { FormEvent, useState } from 'react';

export default function ModalCreateActivity({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonCreateActivityClose } = useTripDetails();

  const [title, setTitle] = useState('');
  const [occurs, setOccurs] = useState('');

  const createActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title) {
      alert('Digite a atividade');
      return;
    }
    if (!occurs) {
      alert('Digite data e horario');
      return;
    }

    api
      .post(`/trips/${params.slug}/activities`, {
        title: title,
        occurs_at: occurs,
      })
      .then((response) => {
        handleButtonCreateActivityClose();
        setTitle('');
        setOccurs('');
        return response.data;
      });
    window.document.location.reload();
  };

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">Cadastrar atividade</h1>
            <button onClick={handleButtonCreateActivityClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </header>

        <form onSubmit={createActivity} className="flex flex-col gap-3 ">
          <div className="flex items-center gap-3 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Tag className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Qual a atividade?"
              className="w-full bg-transparent outline-none"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-full flex items-center gap-3 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
              <input
                type="datetime-local"
                name="date"
                placeholder="Qual data?"
                className="w-full bg-transparent outline-none"
                onChange={(event) => setOccurs(event.target.value)}
              />
            </div>
          </div>
          <Button variant="primary" size="full">
            Salvar atividade
            <CircleCheckBig className="text-zinc-900 size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
