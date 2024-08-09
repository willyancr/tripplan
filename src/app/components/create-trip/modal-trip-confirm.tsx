'use client';
import { CircleCheckBig, Loader, Mail, User, X } from 'lucide-react';
import { useCreateTrip } from '@/app/context/create-trip-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../button';
import * as z from 'zod';

const schema = z.object({
  nameOwer: z.string().min(1, { message: 'Nome obrigatório' }),
  email: z.string().min(1, { message: 'Email obrigatório' }),
});

export default function ModalTripConfirm() {
  const {
    handleModalGuestsConfirmClose,
    destination,
    setOwerName,
    createTrip,
    setOwerEmail,
    displayInputDate,
    isLoading,
  } = useCreateTrip();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="bg-black/70 fixed inset-0 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg py-5 px-6 text-left drop-shadow-2xl">
        <header className="mb-5 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-lg font-medium text-zinc-300">
              Confirmar criação da viagem
            </h1>
            <button onClick={handleModalGuestsConfirmClose}>
              <X className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-50 font-medium">{destination}</span> nas
            datas de{' '}
            <span className="text-zinc-50 font-medium">{displayInputDate}</span>{' '}
            preencha seus dados abaixo:
          </p>
        </header>

        <form
          onSubmit={handleSubmit(createTrip)}
          className="flex flex-col gap-3 "
        >
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              {...register('nameOwer')}
              type="text"
              name="nameOwer"
              placeholder="Seu nome completo"
              className="w-96 bg-transparent outline-none"
              onChange={(e) => setOwerName(e.target.value)}
            />
            <div className="flex text-sm ml-auto text-red-600/90">
              {errors.nameOwer?.message && (
                <span>
                  {typeof errors.nameOwer?.message === 'string'
                    ? errors.nameOwer?.message
                    : JSON.stringify(errors.nameOwer?.message)}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black border border-zinc-800 px-4 h-12 rounded-lg text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              {...register('email')}
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="w-96 bg-transparent outline-none"
              onChange={(e) => setOwerEmail(e.target.value)}
            />
            <div className="flex text-sm ml-auto text-red-600/90">
              {errors.email?.message && (
                <span>
                  {typeof errors.email?.message === 'string'
                    ? errors.email?.message
                    : JSON.stringify(errors.email?.message)}
                </span>
              )}
            </div>
          </div>
          {isLoading ? (
            <Button variant="terceary" size="full" disabled>
              <Loader className="size-5" />
              Criando a viagem...
            </Button>
          ) : (
            <Button variant="primary" size="full">
              Confirmar criação da viagem
              <CircleCheckBig className="size-5" />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
