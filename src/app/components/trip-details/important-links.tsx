'use client';
import { useTripDetails } from '@/app/context/trip-details-context';
import ModalRegisterLink from './modal-register-link';
import { Link2, SquarePlus, X } from 'lucide-react';
import Button from '../button';
import { useEffect, useState } from 'react';
import { api } from '@/app/lib/axixos';
import ItemActionButton from './item-action-button';

export interface Links {
  id: string;
  title: string;
  url: string;
}

export default function ImportantLinks({
  params,
}: {
  params: { slug: string };
}) {
  const {
    handleButtonRegisterLinkOpen,
    buttonRegisterLinkOpen,
    handleDeleteLink,
  } = useTripDetails();

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
          <div className="flex items-center gap-2">
            <Link2 className="text-zinc-400" />
            <ItemActionButton
              onClick={() =>
                handleDeleteLink({
                  slug: params.slug,
                  linkId: link.id,
                  setLinks,
                })
              }
            >
              <X className="text-zinc-400 size-3" />
            </ItemActionButton>
          </div>
        </div>
      ))}

      <Button variant="secondary" onClick={handleButtonRegisterLinkOpen}>
        <SquarePlus className="size-4" />
        Cadastrar novo link
      </Button>

      {buttonRegisterLinkOpen && (
        <ModalRegisterLink params={params} setLinks={setLinks} />
      )}
    </div>
  );
}
