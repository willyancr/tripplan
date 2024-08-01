'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import { api } from '@/app/lib/axixos';
import { CircleCheckBig, Link2, Tag, X } from 'lucide-react';
import { FormEvent, useState } from 'react';
import Button from '../button';

export default function ModalRegisterLink({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonRegisterLinkClose } = useTripDetails();

  const [titleLink, setTitlelink] = useState('');
  const [url, setUrl] = useState('');

  const createLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!titleLink) {
      alert('Digite o titulo do link');
      return;
    }
    if (!url) {
      alert('Digite a URL');
      return;
    }

    api
      .post(`/trips/${params.slug}/links`, {
        title: titleLink,
        url: url,
      })
      .then((response) => {
        handleButtonRegisterLinkClose();
        setTitlelink('');
        setUrl('');
        console.log(response.data);
        return response.data;
      });
    window.document.location.reload();
  };

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300">
              Cadastrar link
            </h1>
            <button onClick={handleButtonRegisterLinkClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </header>

        <form onSubmit={createLink} className="flex flex-col gap-3 ">
          <div className="flex items-center gap-3 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Tag className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Título do link"
              className="w-full bg-transparent outline-none"
              onChange={(e) => {
                setTitlelink(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-1 items-center gap-3 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
              <Link2 className="size-5" />
              <input
                type="text"
                name="text"
                placeholder="URL"
                className="w-full bg-transparent outline-none"
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </div>
          </div>
          <Button variant="primary" size="full">
            Salvar link
            <CircleCheckBig className="text-zinc-900 size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
