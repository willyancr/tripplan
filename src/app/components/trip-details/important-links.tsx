'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import ModalRegisterLink from './modal-register-link';
import { Link2, SquarePlus } from 'lucide-react';
import Button from '../button';
import { useEffect, useState } from 'react';
import { api } from '@/app/lib/axixos';

interface Links {
  id: string;
  title: string;
  url: string;
}

export default function ImportantLinks({
  params,
}: {
  params: { slug: string };
}) {
  const { handleButtonRegisterLinkOpen, buttonRegisterLinkOpen } =
    useTripDetails();

  const [links, setLinks] = useState<Links[]>();

  useEffect(() => {
    api
      .get(`/trips/${params.slug}/links`)
      .then((response) => setLinks(response.data.links));
  }, [params.slug]);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Links importantes</h2>

      {links?.map((link) => (
        <div
          key={link.id}
          className="flex items-center justify-between gap-3 flex-1"
        >
          <div className="flex flex-col text-ellipsis overflow-hidden">
            <span>{link.title}</span>
            <a
              href={link.url}
              target="_blank"
              className="text-sm text-zinc-500 truncate max-w-[250px] hover:text-zinc-300"
            >
              {link.url}
            </a>
          </div>

          <Link2 className="text-zinc-400" />
        </div>
      ))}

      <Button variant="secondary" onClick={handleButtonRegisterLinkOpen}>
        <SquarePlus className="size-4" />
        Cadastrar novo link
      </Button>

      {buttonRegisterLinkOpen && <ModalRegisterLink params={params} />}
    </div>
  );
}
