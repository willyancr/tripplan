import InputDestinationAndDate from "@/app/components/create-trip/input-destination-and-date";
import UserTravelCard from "@/app/components/create-trip/user-travel-card";
import TermsOfUse from "@/app/components/create-trip/terms-of-use";
import Image from "next/image";
import Footer from "@/app/components/footer";

export default function CreateTripPage() {
  return (
    <div className="flex flex-col gap-40">
      <div className="m-auto mb-12 flex flex-col items-center justify-center gap-10 text-center sm:max-w-[600px]">
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
      </div>

      <Footer />
    </div>
  );
}
