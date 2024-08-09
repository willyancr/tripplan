'use client';
import Header from '@/app/components/header';
import { CreateTripProvider } from '../context/create-trip-context';
import { TripDetailsProvider } from '../context/trip-details-context';
import { SessionProvider } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TripDetailsProvider>
      <CreateTripProvider>
        <SessionProvider>
          <section className="mx-auto w-full max-w-[1200px] px-12 ">
            <Header />
            {children}
          </section>
        </SessionProvider>
      </CreateTripProvider>
    </TripDetailsProvider>
  );
}
