'use client';
import React, { createContext, useContext, useState } from 'react';
import { api } from '../lib/axixos';

interface TripProps {
  trip: {
    id: string;
    destination: string;
    starts_at: string;
    ends_at: string;
    is_confirmed: boolean;
  };
}

interface TripDetailsContextProps {
  buttonCreateActivityOpen: boolean;
  buttonRegisterLinkOpen: boolean;
  buttonManageGuestsOpen: boolean;
  handleButtonCreateActivityOpen: () => void;
  handleButtonCreateActivityClose: () => void;
  handleButtonRegisterLinkOpen: () => void;
  handleButtonRegisterLinkClose: () => void;
  handleButtonManageGuestsOpen: () => void;
  handleButtonManageGuestsClose: () => void;
  getInfosTrip: (slug: string) => Promise<TripProps>;
}

const TripDetailsContext = createContext({} as TripDetailsContextProps);

export const TripDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [buttonCreateActivityOpen, setButtonCreateActivityOpen] =
    useState(false);
  const [buttonRegisterLinkOpen, setButtonRegisterLinkOpen] = useState(false);
  const [buttonManageGuestsOpen, setButtonManageGuestsOpen] = useState(false);

  async function getInfosTrip(slug: string) {
    const response = await api.get(`http://localhost:3333/trips/${slug}`);
    const infosTrip = (await response.data) as TripProps;
    return infosTrip;
  }

  const handleButtonCreateActivityOpen = () => {
    setButtonCreateActivityOpen(true);
  };
  const handleButtonCreateActivityClose = () => {
    setButtonCreateActivityOpen(false);
  };
  const handleButtonRegisterLinkOpen = () => {
    setButtonRegisterLinkOpen(true);
  };
  const handleButtonRegisterLinkClose = () => {
    setButtonRegisterLinkOpen(false);
  };
  const handleButtonManageGuestsOpen = () => {
    setButtonManageGuestsOpen(true);
  };
  const handleButtonManageGuestsClose = () => {
    setButtonManageGuestsOpen(false);
  };
  return (
    <TripDetailsContext.Provider
      value={{
        handleButtonCreateActivityOpen,
        buttonCreateActivityOpen,
        handleButtonRegisterLinkOpen,
        buttonRegisterLinkOpen,
        handleButtonCreateActivityClose,
        handleButtonRegisterLinkClose,
        handleButtonManageGuestsOpen,
        buttonManageGuestsOpen,
        handleButtonManageGuestsClose,
        getInfosTrip,
      }}
    >
      {children}
    </TripDetailsContext.Provider>
  );
};
export const useTripDetails = () => useContext(TripDetailsContext);
