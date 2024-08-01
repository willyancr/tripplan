'use client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import React, { createContext, FormEvent, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { api } from '../lib/axixos';

interface Person {
  name: string;
  email: string;
}

interface CreateTripContextProps {
  displayInputDate: string | null;
  inputGuestsOpen: boolean;
  modalDateOpen: boolean;
  modalGuestsOpen: boolean;
  modalGuestsConfirm: boolean;
  personInvited: Person[];
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
  handleRemovePersonInvited(email: string): void;
  handlePersonInvited(event: FormEvent<HTMLFormElement>): void;
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
  const [personInvited, setPersonInvited] = useState<Person[]>([]);
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

  const handlePersonInvited = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const name = data.get('name') as string;
    const email = data.get('email') as string;

    if (!email) {
      alert('Por favor, insira um email');
      return;
    }
    if (personInvited.some((person) => person.email === email)) {
      alert(`O email ${email} já foi adicionado`);
      return;
    }

    setPersonInvited([...personInvited, { name, email }]);

    (event.target as HTMLFormElement).reset();
  };

  const handleRemovePersonInvited = (email: string) => {
    setPersonInvited(personInvited.filter((person) => person.email !== email));
  };

  const router = useRouter();
  const createTrip = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!destination) alert('Digite um destino');
    if (!dateRage?.from || !dateRage?.to) alert('Digite uma data');
    if (personInvited.length === 0) alert('Digite um email do convidado');
    if (!owerName || !owerEmail) alert('Digite nome ou email do adm');

    api
      .post('/trips', {
        destination: destination,
        starts_at: dateRage?.from,
        ends_at: dateRage?.to,
        names_to_invite: personInvited.map((person) => person.name),
        emails_to_invite: personInvited.map((person) => person.email),
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
        handlePersonInvited,
        handleInputGuestClose,
        handleInputGuestsOpen,
        handleModalDateClose,
        handleModalDateOpen,
        handleModalGuestsClose,
        handleModalGuestsConfirmClose,
        handleModalGuestsConfirmOpen,
        handleModalGuestsOpen,
        handleRemovePersonInvited,
        inputGuestsOpen,
        modalDateOpen,
        modalGuestsConfirm,
        modalGuestsOpen,
        personInvited,
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
