'use client';
import { SessionProvider } from 'next-auth/react';
import { TripDetailsProvider } from '../context/trip-details-context';
import { CreateTripProvider } from '../context/create-trip-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TripDetailsProvider>
        <CreateTripProvider>{children}</CreateTripProvider>
      </TripDetailsProvider>
    </SessionProvider>
  );
}
