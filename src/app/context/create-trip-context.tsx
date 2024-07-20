'use client';
import React, { createContext, FormEvent, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';

interface CreateTripContextProps {
  inputGuestsOpen: boolean;
  modalDateOpen: boolean;
  modalGuestsOpen: boolean;
  modalGuestsConfirm: boolean;
  emailInvited: string[];
  dateRage: DateRange | undefined;
  setDateRage: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  handleInputGuestsOpen(): void;
  handleInputGuestClose(): void;
  handleModalDateOpen(): void;
  handleModalDateClose(): void;
  handleModalGuestsOpen(): void;
  handleModalGuestsClose(): void;
  handleModalGuestsConfirmOpen(): void;
  handleModalGuestsConfirmClose(): void;
  handleRemoveEmailInvited(email: string): void;
  handleEmailInvited(event: FormEvent<HTMLFormElement>): void;
}

const CreateTripContext = createContext({} as CreateTripContextProps);

export const CreateTripProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputGuestsOpen, setInputGuestsOpen] = useState(false);
  const [modalDateOpen, setModalDateOpen] = useState(false);
  const [modalGuestsOpen, setModalGuestsOpen] = useState(false);
  const [modalGuestsConfirm, setModalGuestsConfirm] = useState(false);
  const [emailInvited, setEmailInvited] = useState<string[]>([]);
  const [dateRage, setDateRage] = useState<DateRange | undefined>();

  const handleInputGuestsOpen = () => {
    setInputGuestsOpen(true);
  };
  const handleInputGuestClose = () => {
    setInputGuestsOpen(false);
  };
  const handleModalDateOpen = () => {
    setModalDateOpen(true);
  };
  const handleModalDateClose = () => {
    setModalDateOpen(false);
  };
  const handleModalGuestsOpen = () => {
    setModalGuestsOpen(true);
  };
  const handleModalGuestsClose = () => {
    setModalGuestsOpen(false);
  };
  const handleModalGuestsConfirmOpen = () => {
    setModalGuestsConfirm(true);
  };
  const handleModalGuestsConfirmClose = () => {
    setModalGuestsConfirm(false);
  };

  const handleEmailInvited = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get('email') as string;

    if (!email) {
      alert('Por favor, insira um email');
      return;
    }
    if (emailInvited.includes(email)) {
      alert(`O email ${email} ja foi adicionado`);
      return;
    }

    setEmailInvited([...emailInvited, email]);

    (event.target as HTMLFormElement).reset();
  };

  const handleRemoveEmailInvited = (email: string) => {
    setEmailInvited(emailInvited.filter((item) => item !== email));
  };

  return (
    <CreateTripContext.Provider
      value={{
        handleEmailInvited,
        handleInputGuestClose,
        handleInputGuestsOpen,
        handleModalDateClose,
        handleModalDateOpen,
        handleModalGuestsClose,
        handleModalGuestsConfirmClose,
        handleModalGuestsConfirmOpen,
        handleModalGuestsOpen,
        handleRemoveEmailInvited,
        inputGuestsOpen,
        modalDateOpen,
        modalGuestsConfirm,
        modalGuestsOpen,
        emailInvited,
        dateRage,
        setDateRage: setDateRage,
      }}
    >
      {children}
    </CreateTripContext.Provider>
  );
};
export const useCreateTrip = () => useContext(CreateTripContext);
