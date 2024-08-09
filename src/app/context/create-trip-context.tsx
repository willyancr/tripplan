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
  isLoading: boolean;
  displayInputDate: string | null;
  inputGuestsOpen: boolean;
  modalDateOpen: boolean;
  modalTermsOfUseOpen: boolean;
  modalPrivacyPoliciesOpen: boolean;
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
  handleModalTermsOfUseOpen(): void;
  handleModalTermsOfUseClose(): void;
  handleModalPrivacyPoliciesOpen(): void;
  handleModalPrivacyPoliciesClose(): void;
  handleModalGuestsOpen(): void;
  handleModalGuestsClose(): void;
  handleModalGuestsConfirmOpen(): void;
  handleModalGuestsConfirmClose(): void;
  handleRemovePersonInvited(email: string): void;
  handlePersonInvited(event: FormEvent<HTMLFormElement>): void;
  createTrip(): void;
}

const CreateTripContext = createContext({} as CreateTripContextProps);

export const CreateTripProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inputGuestsOpen, setInputGuestsOpen] = useState(false);
  const [modalDateOpen, setModalDateOpen] = useState(false);
  const [modalTermsOfUseOpen, setModalTermsOfUseOpen] = useState(false);
  const [modalPrivacyPoliciesOpen, setModalPrivacyPoliciesOpen] =
    useState(false);
  const [modalGuestsOpen, setModalGuestsOpen] = useState(false);
  const [modalGuestsConfirm, setModalGuestsConfirm] = useState(false);
  const [personInvited, setPersonInvited] = useState<Person[]>([]);
  const [dateRage, setDateRage] = useState<DateRange | undefined>();

  const [destination, setDestination] = useState('');
  const [owerName, setOwerName] = useState('');
  const [owerEmail, setOwerEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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
  const handleModalTermsOfUseOpen = () => {
    setModalTermsOfUseOpen(true);
  };
  const handleModalTermsOfUseClose = () => {
    setModalTermsOfUseOpen(false);
  };
  const handleModalPrivacyPoliciesOpen = () => {
    setModalPrivacyPoliciesOpen(true);
  };
  const handleModalPrivacyPoliciesClose = () => {
    setModalPrivacyPoliciesOpen(false);
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

  const createTrip = () => {
    setIsLoading(true);

    try {
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
        })
        .catch((error) => {
          console.error('Erro ao criar viagem:', error);

          if (error.response) {
            if (error.response.status === 400) {
              alert(
                'Erro na validação dos dados. Verifique os campos e tente novamente.',
              );
            } else {
              alert('Erro ao criar a viagem. Tente novamente mais tarde.');
            }
          } else {
            alert(
              'Erro ao criar a viagem. Verifique sua conexão com a internet.',
            );
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
      setIsLoading(false);
    }
  };

  return (
    <CreateTripContext.Provider
      value={{
        isLoading,
        createTrip,
        displayInputDate,
        handlePersonInvited,
        handleInputGuestClose,
        handleInputGuestsOpen,
        handleModalDateClose,
        handleModalDateOpen,
        handleModalTermsOfUseClose,
        handleModalTermsOfUseOpen,
        handleModalPrivacyPoliciesClose,
        handleModalPrivacyPoliciesOpen,
        handleModalGuestsClose,
        handleModalGuestsConfirmClose,
        handleModalGuestsConfirmOpen,
        handleModalGuestsOpen,
        handleRemovePersonInvited,
        inputGuestsOpen,
        modalDateOpen,
        modalTermsOfUseOpen,
        modalPrivacyPoliciesOpen,
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
