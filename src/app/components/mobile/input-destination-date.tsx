import { useCreateTrip } from "@/app/context/create-trip-context";
import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ModalDate from "../create-trip/modal-date";
import Button from "../button";
import { useEffect } from "react";

const schema = z.object({
  destination: z.string().min(2, { message: "Destino obrigatório" }),
  date: z.string().min(1, { message: "Data obrigatória" }),
});

export default function MobileInputDestinationDate() {
  const {
    inputGuestsOpen,
    handleInputGuestsOpen,
    handleInputGuestClose,
    handleModalDateOpen,
    modalDateOpen,
    setDestination,
    displayInputDate,
  } = useCreateTrip();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("date", displayInputDate || "");
  }, [displayInputDate, setValue]);

  return (
    <div className="flex w-[300px] flex-col gap-2 sm:hidden">
      <div className="flex items-center gap-2 rounded-lg bg-zinc-800 px-2 py-4 text-zinc-400 drop-shadow-2xl">
        <MapPin className="size-5" />
        <input
          {...register("destination")}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-zinc-800 outline-none"
          onChange={(e) => setDestination(e.target.value)}
          disabled={inputGuestsOpen}
        />
      </div>
      <div className="flex text-sm text-red-600/90">
        {errors.destination?.message && (
          <p className="text-red-500">⚠️{String(errors.destination.message)}</p>
        )}
      </div>
      <button
        onClick={handleModalDateOpen}
        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-2 py-4 text-zinc-400 drop-shadow-2xl"
        disabled={inputGuestsOpen}
      >
        <Calendar className="size-5" />
        <span {...register("date")}>{displayInputDate || "Quando?"}</span>
      </button>
      {modalDateOpen && <ModalDate />}

      <div className="flex text-sm text-red-600/90">
        {errors.date?.message && (
          <p className="text-red-500">⚠️{String(errors.date.message)}</p>
        )}
      </div>

      {inputGuestsOpen ? (
        <Button variant="secondary" onClick={handleInputGuestClose}>
          Alterar local/data
          <Settings2 />
        </Button>
      ) : (
        <Button variant="primary" onClick={handleSubmit(handleInputGuestsOpen)}>
          Continuar
          <ArrowRight />
        </Button>
      )}
    </div>
  );
}
