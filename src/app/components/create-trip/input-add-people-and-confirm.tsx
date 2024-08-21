import { useCreateTrip } from "@/app/context/create-trip-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, UserRoundPlus } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../button";
import ModalGuest from "./modal-guest";
import ModalTripConfirm from "./modal-trip-confirm";

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
      <div className="flex flex-col gap-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:rounded-lg sm:bg-zinc-800 sm:px-4 sm:py-2">
        <div className="flex items-center rounded-lg bg-zinc-800 px-2 py-4 text-zinc-400 drop-shadow-2xl sm:flex sm:justify-between sm:gap-2 sm:py-2">
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
        </div>
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
