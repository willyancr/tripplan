import { useTripDetails } from '@/app/context/trip-details-context';
import { CircleCheckBig, Link2, Tag, X } from 'lucide-react';

export default function ModalRegisterLink() {
  const { handleButtonRegisterLinkClose } = useTripDetails();

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium ">Cadastrar link</h1>
            <button onClick={handleButtonRegisterLinkClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </header>

        <form className="flex flex-col gap-3 ">
          <div className="flex items-center gap-3 bg-black border border-zinc-800 px-4 h-14 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Tag className="size-5" />
            <input
              type="text"
              name="text"
              placeholder="Título do link"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex flex-1 items-center gap-3 bg-black border border-zinc-800 px-4 h-14 rounded-lg text-zinc-400 drop-shadow-2xl">
              <Link2 className="size-5" />
              <input
                type="text"
                name="text"
                placeholder="URL"
                className="bg-transparent outline-none"
              />
            </div>
          </div>

          <button className="w-[200px] ml-auto flex items-center justify-center gap-2 bg-greenish-yellow text-zinc-900 px-4 py-2 rounded-lg hover:brightness-75 transition-all">
            Salvar link
            <CircleCheckBig className="text-zinc-900 size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
