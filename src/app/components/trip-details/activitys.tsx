"use client";
import { useTripDetails } from "@/app/context/trip-details-context";
import { api } from "@/app/lib/axixos";
import { brazilTime, dayjs } from "@/app/lib/dayjs";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CircleCheck, CircleDashed, Info, SquarePlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../button";
import ItemActionButton from "./item-action-button";
import ModalCreateActivity from "./modal-create-activity";

export default function Activitys({ params }: { params: { slug: string } }) {
  const {
    handleButtonCreateActivityOpen,
    buttonCreateActivityOpen,
    activities,
    setActivities,
    handleDeleteActivity,
  } = useTripDetails();

  const [check, setCheck] = useState<string[]>([]);

  //Adiciona ou remove um ID de atividade do estado de check.
  const handleCheck = (activityID: string) => {
    // Verifica se o ID da atividade já está no estado de check.
    // Se estiver, remove-o.
    // Se não estiver, adiciona-o.
    setCheck((prevChecked) =>
      prevChecked.includes(activityID)
        ? prevChecked.filter((id) => id !== activityID)
        : [...prevChecked, activityID],
    );
  };

  useEffect(() => {
    api
      .get(`/trips/${params.slug}/activities`)
      .then((response) => setActivities(response.data.activities));
  }, [params.slug, setActivities]);

  return (
    <div className="mb-5 flex-1 space-y-6">
      <div className="flex w-[300px] items-center justify-between sm:w-full sm:flex-row">
        <h1 className="text-3xl font-semibold">Atividades</h1>
        <Button
          onClick={handleButtonCreateActivityOpen}
          className="flex h-9 items-center gap-2 rounded-lg bg-greenish-yellow px-3 font-medium text-zinc-800 transition-all hover:brightness-75"
        >
          <SquarePlus className="sm:size-4" />
          <span className="hidden sm:inline">Cadastrar atividade</span>
        </Button>
      </div>
      <div className="space-y-8">
        {activities.map((category) => (
          <div key={category.date} className="flex flex-col gap-2">
            <p className="text-zinc-300">
              Dia {format(category.date, "d")}
              <span className="ml-1 text-xs text-zinc-500">
                {format(category.date, "EEEE", { locale: ptBR })}
              </span>
            </p>
            {category.activities.length > 0 ? (
              <div className="space-y-2">
                {category.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex w-[300px] items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-400 sm:w-full"
                  >
                    <button onClick={() => handleCheck(activity.id)}>
                      {check.includes(activity.id) ? (
                        <CircleCheck className="size-5 text-lime-300" />
                      ) : (
                        <CircleDashed className="size-5" />
                      )}
                    </button>
                    <span>{activity.title}</span>
                    <span className="ml-auto">
                      {dayjs(activity.date_created)
                        .tz(brazilTime, true)
                        .format("HH:mm")}
                      h
                    </span>
                    <span> | </span>

                    <ItemActionButton
                      onClick={() =>
                        handleDeleteActivity({
                          slug: params.slug,
                          activityID: activity.id,
                        })
                      }
                    >
                      <X className="size-3 text-zinc-400" />
                    </ItemActionButton>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex w-[300px] items-center gap-3 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-400 sm:w-full">
                <Info className="size-5 text-zinc-500" />
                <span className="text-sm text-zinc-500">
                  Não há atividade cadastrada
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {buttonCreateActivityOpen && <ModalCreateActivity params={params} />}
    </div>
  );
}
