import { useCreateTrip } from "@/app/context/create-trip-context";
import { ArrowRight, UserRoundPlus } from "lucide-react";
import ModalTripConfirm from "./modal-trip-confirm";
import ModalGuest from "./modal-guest";
import Button from "../button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";

// Definindo o schema Zod para a validação
const schema = z.object({
  guests: z.string().min(1, "Pelo menos uma pessoa deve ser convidada"),
});

export default function InputAddPeopleAndConfirm() {
  const {
    handleModalGuestsOpen,
    handleModalGuestsConfirmOpen,
    personInvited,
    modalGuestsConfirm,
    modalGuestsOpen,
  } = useCreateTrip();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Atualizando o valor de guests com o número de convidados
  useEffect(() => {
    setValue(
      "guests",
      personInvited.length > 0 ? personInvited.join(", ") : "",
    );
  }, [personInvited, setValue]);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-400 drop-shadow-2xl">
        <button onClick={handleModalGuestsOpen} className="flex gap-2">
          <UserRoundPlus className="size-5" />
          {personInvited.length > 0 ? (
            <span className="text-zinc-100">
              {personInvited.length === 1
                ? "1 pessoa convidada"
                : `${personInvited.length} pessoas convidadas`}{" "}
            </span>
          ) : (
            <span {...register("guests")}>Quem estará na viagem?</span>
          )}
        </button>
        <Button
          variant="primary"
          onClick={handleSubmit(handleModalGuestsConfirmOpen)}
        >
          Confirmar a viagem
          <ArrowRight />
        </Button>
      </div>
      <div className="ml-10 mt-2 flex text-sm text-red-600/90">
        {errors.guests?.message && (
          <p className="text-red-500">⚠️ {String(errors.guests.message)}</p>
        )}
      </div>
      {modalGuestsOpen && <ModalGuest />}
      {modalGuestsConfirm && <ModalTripConfirm />}
    </div>
  );
}
