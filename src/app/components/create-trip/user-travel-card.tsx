"use client";
import { Calendar, Earth, Loader } from "lucide-react";
import ButtonLogin from "../button-login";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { api } from "@/app/lib/axixos";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
}

export default function UserTravelCard() {
  const { data: session } = useSession();
  const [trips, setTrips] = useState<Trip[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (session?.user.id) {
      setIsLoading(true);
      api
        .get(`/user/${session.user.id}/trips`)
        .then((response) => {
          setTrips(response.data.trips);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [session?.user.id]);

  if (isLoading) {
    return (
      <span className="flex items-center gap-2 text-zinc-300">
        <Loader className="animate-spin" />
        Carregando suas viagens...
      </span>
    );
  }

  if (error) {
    return toast.error("Erro ao carregar suas viagens");
  }

  const handleClick = (tripId: string) => () => {
    router.push(`/trip-details/${tripId}`);
  };
  return session ? (
    <div className="flex flex-col gap-3 rounded-lg border border-zinc-700 p-4 text-left text-sm sm:w-[740px]">
      <span className="text-lg text-zinc-100">Suas viagens</span>
      <div className="flex flex-wrap gap-3">
        {trips?.map((trip) => (
          <button
            key={trip.id}
            onClick={handleClick(trip.id)}
            className="trasnsition-all hover:text-greenish-yellow hover:brightness-125"
          >
            <div className="flex w-max flex-col gap-2 rounded-md bg-zinc-900 px-4 py-2">
              <span className="flex items-center gap-2 text-zinc-300">
                <Earth className="size-4" />
                {trip.destination}
              </span>
              <span className="flex items-center gap-2 text-zinc-300">
                <Calendar className="size-4" />
                {format(trip.starts_at, "dd 'de' MMM", { locale: ptBR })
                  .concat(" até ")
                  .concat(
                    format(trip.ends_at, "dd 'de' MMM", { locale: ptBR }),
                  )}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-2 rounded-lg border border-zinc-700 p-4 text-left text-sm sm:w-[550px]">
      <span className="text-lg text-zinc-100">
        Personalize suas viagens do seu jeito.
      </span>
      <span className="text-zinc-400">
        Entre na sua conta para ter acesso ao registros das suas viagens de
        qualquer dispositivo, tornando o planejamento das próximas viagens muito
        mais simples.
      </span>
      <ButtonLogin />
    </div>
  );
}
