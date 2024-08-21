"use client";
import { SessionProvider } from "next-auth/react";
import { TripDetailsProvider } from "../context/trip-details-context";
import { CreateTripProvider } from "../context/create-trip-context";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster />
      <TripDetailsProvider>
        <CreateTripProvider>{children}</CreateTripProvider>
      </TripDetailsProvider>
    </SessionProvider>
  );
}
