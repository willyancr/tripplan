'use client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import React, { createContext, FormEvent, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { api } from '../lib/axixos';

interface CreateTripContextProps {
  displayInputDate: string | null;
  inputGuestsOpen: boolean;
  modalDateOpen: boolean;
  modalGuestsOpen: boolean;
  modalGuestsConfirm: boolean;
  emailInvited: string[];
  destination: string;
  owerName: string;
  owerEmail: string;
  dateRage: DateRange | undefined;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  setOwerName: React.Dispatch<React.SetStateAction<string>>;
  setOwerEmail: React.Dispatch<React.SetStateAction<string>>;
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
  createTrip(event: FormEvent<HTMLFormElement>): void;
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

  const [destination, setDestination] = useState('');
  const [owerName, setOwerName] = useState('');
  const [owerEmail, setOwerEmail] = useState('');

  // Retorna a data de entrada e saída no input do create trip
  const displayInputDate =
    dateRage && dateRage.from && dateRage.to
      ? format(dateRage.from, "dd 'de' MMM", { locale: ptBR })
          .concat(' até ')
          .concat(format(dateRage.to, "dd 'de' MMM", { locale: ptBR }))
      : null;

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

  const router = useRouter();
  const createTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!destination) return;
    if (!dateRage?.from || !dateRage?.to) return;
    if (emailInvited.length === 0) return;
    if (!owerName || !owerEmail) return;

    api
      .post('/trips', {
        destination: destination,
        starts_at: dateRage?.from,
        ends_at: dateRage?.to,
        emails_to_invite: emailInvited,
        owner_name: owerName,
        owner_email: owerEmail,
      })
      .then((response) => {
        const { tripId } = response.data;
        router.push(`/trip-details/${tripId}`);
      });
  };

  return (
    <CreateTripContext.Provider
      value={{
        createTrip,
        displayInputDate,
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
        destination,
        owerName,
        owerEmail,
        setOwerName: setOwerName,
        setOwerEmail: setOwerEmail,
        setDateRage: setDateRage,
        setDestination: setDestination,
      }}
    >
      {children}
    </CreateTripContext.Provider>
  );
};
export const useCreateTrip = () => useContext(CreateTripContext);
