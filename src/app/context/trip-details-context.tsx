'use client';
import React, { createContext, useContext, useState } from 'react';

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
      }}
    >
      {children}
    </TripDetailsContext.Provider>
  );
};
export const useTripDetails = () => useContext(TripDetailsContext);