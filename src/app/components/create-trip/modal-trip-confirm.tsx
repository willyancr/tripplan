"use client";
import { CircleCheckBig, Loader, Mail, User, X } from "lucide-react";
import { useCreateTrip } from "@/app/context/create-trip-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../button";
import * as z from "zod";

const schema = z.object({
  nameOwer: z.string().min(1, { message: "Nome obrigatório" }),
  email: z.string().min(1, { message: "Email obrigatório" }),
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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="w-[350px] animate-modal rounded-lg bg-zinc-900 px-6 py-5 text-left drop-shadow-2xl sm:w-[640px]">
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
            Para concluir a criação da viagem para{" "}
            <span className="font-medium text-zinc-50">{destination}</span> nas
            datas de{" "}
            <span className="font-medium text-zinc-50">{displayInputDate}</span>{" "}
            preencha seus dados abaixo:
          </p>
        </header>

        <form
          onSubmit={handleSubmit(createTrip)}
          className="flex flex-col gap-3"
        >
          <div className="flex h-12 items-center gap-2 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
            <User className="size-5" />
            <input
              {...register("nameOwer")}
              type="text"
              name="nameOwer"
              placeholder="Seu nome completo"
              className="w-96 bg-transparent outline-none"
              onChange={(e) => setOwerName(e.target.value)}
            />
            <div className="ml-auto flex text-xs text-red-600/90 sm:text-sm">
              {errors.nameOwer?.message && (
                <p className="text-red-500">
                  {String(errors.nameOwer.message)}
                </p>
              )}
            </div>
          </div>
          <div className="flex h-12 items-center gap-2 rounded-lg border border-zinc-800 bg-black px-4 text-zinc-400 drop-shadow-2xl">
            <Mail className="size-5" />
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="w-96 bg-transparent outline-none"
              onChange={(e) => setOwerEmail(e.target.value)}
            />
            <div className="ml-auto flex text-xs text-red-600/90 sm:text-sm">
              {errors.email?.message && (
                <p className="text-red-500">{String(errors.email.message)}</p>
              )}
            </div>
          </div>
          {isLoading ? (
            <Button variant="terceary" size="full" disabled>
              Confirmar criação da viagem
              <CircleCheckBig className="size-5" />
            </Button>
          ) : (
            <Button variant="primary" size="full" disabled={isSubmitting}>
              Confirmar criação da viagem
              <CircleCheckBig className="size-5" />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
