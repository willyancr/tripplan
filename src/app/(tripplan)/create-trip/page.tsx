import InputDestinationAndDate from "@/app/components/create-trip/input-destination-and-date";
import UserTravelCard from "@/app/components/create-trip/user-travel-card";
import TermsOfUse from "@/app/components/create-trip/terms-of-use";
import Image from "next/image";

export default function CreateTripPage() {
  return (
    <div className="m-auto mb-6 flex flex-col items-center justify-center gap-10 text-center sm:h-[600px] sm:max-w-[600px]">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl sm:text-4xl">Planeje uma nova viagem </h1>
        <Image
          src="/aviao.png"
          alt="Logo"
          width={50}
          height={50}
          quality={100}
          className="hidden sm:block"
        />
      </div>
      <InputDestinationAndDate />
      <UserTravelCard />
      <TermsOfUse />
    </div>
  );
}
