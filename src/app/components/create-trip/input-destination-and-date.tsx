"use client";

import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import InputAddPeopleAndConfirm from "./input-add-people-and-confirm";
import { useCreateTrip } from "@/app/context/create-trip-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ModalDate from "./modal-date";
import { useEffect } from "react";
import Button from "../button";
import * as z from "zod";
import MobileInputDestinationDate from "../mobile/input-destination-date";

const schema = z.object({
  destination: z.string().min(2, { message: "Destino obrigatório" }),
  date: z.string().min(1, { message: "Data obrigatória" }),
});

export default function InputDestinationAndDate() {
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
    <div className="space-y-3">
      <MobileInputDestinationDate />
      <div className="hidden items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-400 drop-shadow-2xl sm:flex sm:w-[740px]">
        <div className="flex flex-1 items-center gap-2">
          <MapPin className="size-5" />
          <input
            {...register("destination")}
            type="text"
            placeholder="Para onde você vai?"
            className="flex-1 bg-transparent outline-none"
            onChange={(e) => setDestination(e.target.value)}
            disabled={inputGuestsOpen}
          />
        </div>

        <button
          onClick={handleModalDateOpen}
          className="flex flex-1 items-center gap-2"
          disabled={inputGuestsOpen}
        >
          <Calendar className="size-5" />
          <span {...register("date")}>{displayInputDate || "Quando?"}</span>
        </button>

        {modalDateOpen && <ModalDate />}

        {inputGuestsOpen ? (
          <Button variant="secondary" onClick={handleInputGuestClose}>
            Alterar local/data
            <Settings2 />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleSubmit(handleInputGuestsOpen)}
          >
            Continuar
            <ArrowRight />
          </Button>
        )}
      </div>
      <div className="mr-auto flex flex-col text-sm text-red-600/90">
        <div>
          {errors.destination?.message && (
            <p className="text-red-500">
              ⚠️ {String(errors.destination.message)}
            </p>
          )}
        </div>
        <div>
          {errors.date?.message && (
            <p className="text-red-500">⚠️ {String(errors.date.message)}</p>
          )}
        </div>
      </div>
      {inputGuestsOpen && <InputAddPeopleAndConfirm />}
    </div>
  );
}
