'use client';
import {
  Check,
  CircleCheck,
  CircleDashed,
  Info,
  SquarePlus,
  X,
} from 'lucide-react';
import { useTripDetails } from '@/app/context/trip-details-context';
import ModalCreateActivity from './modal-create-activity';
import { brazilTime, dayjs } from '@/app/lib/dayjs';
import ItemActionButton from './item-action-button';
import { api } from '@/app/lib/axixos';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Button from '../button';

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
    <div className="flex-1 space-y-6 mb-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Atividades</h1>
        <Button
          onClick={handleButtonCreateActivityOpen}
          className="flex items-center gap-2 bg-greenish-yellow text-zinc-800 font-medium px-3 h-9 rounded-lg hover:brightness-75 transition-all"
        >
          <SquarePlus className="size-4" />
          Cadastrar atividade
        </Button>
      </div>
      <div className="space-y-8">
        {activities.map((category) => (
          <div key={category.date} className="flex flex-col gap-2">
            <p className="text-zinc-300">
              Dia {format(category.date, 'd')}
              <span className="text-zinc-500 text-xs ml-1">
                {format(category.date, 'EEEE', { locale: ptBR })}
              </span>
            </p>
            {category.activities.length > 0 ? (
              <div className="space-y-2">
                {category.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400"
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
                        .format('HH:mm')}
                      h{/* {format(activity.date_created, 'HH:mm')}h */}
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
                      <X className="text-zinc-400 size-3" />
                    </ItemActionButton>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400">
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
