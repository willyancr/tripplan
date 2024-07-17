import InputDestinationAndDateTripDetails from '@/app/components/trip-details/input-destination-and-date-trip-details';
import ImportantLinks from '@/app/components/trip-details/important-links';
import Activitys from '@/app/components/trip-details/activitys';
import Guests from '@/app/components/trip-details/guests';

export default function TripDetailsPage() {
  return (
    <div className="flex flex-col m-auto w-[1000px] mt-5 gap-8">
      <InputDestinationAndDateTripDetails />
      <main className="flex px-6 gap-16">
        <Activitys />
        <div className="flex flex-col gap-6 w-[320px]">
          <ImportantLinks />
          <div className="border-t border-zinc-700" />
          <Guests />
        </div>
      </main>
    </div>
  );
}
