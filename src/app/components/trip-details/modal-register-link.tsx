"use client";
import { useTripDetails } from "@/app/context/trip-details-context";
import { api } from "@/app/lib/axixos";
import { CircleCheckBig, Link2, Tag, X } from "lucide-react";
import { FormEvent, useState } from "react";
import Button from "../button";
import { Links } from "./important-links";
import toast from "react-hot-toast";

export default function ModalRegisterLink({
  params,
  setLinks,
}: {
  params: { slug: string };
  setLinks: (links: Links[]) => void;
}) {
  const { handleButtonRegisterLinkClose } = useTripDetails();

  const [titleLink, setTitlelink] = useState("");
  const [url, setUrl] = useState("");

  const createLink = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!titleLink) {
      toast.error("Por favor, insira um título");
      return;
    }
    if (!url) {
      toast.error("Por favor, insira um link");
      return;
    }

    const postCreateLink = api.post(`/trips/${params.slug}/links`, {
      title: titleLink,
      url: url,
    });

    toast.promise(
      postCreateLink
        .then(() => {
          return api.get(`/trips/${params.slug}/links`);
        })
        .then((response) => {
          setLinks(response.data.links);
          handleButtonRegisterLinkClose();
        }),
      {
        loading: "Criando link...",
        success: "Link criado com sucesso",
        error: "Erro ao criar link",
      },
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-[350px] animate-modal rounded-lg bg-zinc-900 px-6 py-5 text-left drop-shadow-2xl sm:w-[640px]">
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

        <form onSubmit={createLink} className="flex flex-col gap-3">
          <div className="flex h-12 items-center gap-3 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
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
            <div className="flex h-12 flex-1 items-center gap-3 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
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
            <CircleCheckBig className="size-5 text-zinc-900" />
          </Button>
        </form>
      </div>
    </div>
  );
}
