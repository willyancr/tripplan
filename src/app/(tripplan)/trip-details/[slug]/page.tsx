import InputDestinationAndDateTripDetails from "@/app/components/trip-details/input-destination-and-date-trip-details";
import ImportantLinks from "@/app/components/trip-details/important-links";
import Activitys from "@/app/components/trip-details/activitys";
import Guests from "@/app/components/trip-details/guests";

export default function TripDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="my-5 flex w-[1000px] flex-col gap-8 sm:m-auto">
      <InputDestinationAndDateTripDetails params={params} />
      <main className="flex flex-col gap-10 sm:flex-row sm:gap-16 sm:px-6">
        <Activitys params={params} />
        <div className="w-[320px] border-t border-zinc-700 sm:hidden" />
        <div className="flex w-[320px] flex-col gap-6">
          <ImportantLinks params={params} />
          <div className="border-t border-zinc-700" />
          <Guests params={params} />
        </div>
      </main>
    </div>
  );
}
