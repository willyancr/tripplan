'use client';
import React, { createContext, FormEvent, useContext, useState } from 'react';

interface IModalContext {
  inputGuestsOpen: boolean;
  modalGuestsOpen: boolean;
  modalGuestsConfirm: boolean;
  emailInvited: string[];
  handleInputGuestsOpen(): void;
  handleInputGuestClose(): void;
  handleModalGuestsOpen(): void;
  handleModalGuestsClose(): void;
  handleModalGuestsConfirmOpen(): void;
  handleModalGuestsConfirmClose(): void;
  handleEmailInvited(event: FormEvent<HTMLFormElement>): void;
  handleRemoveEmailInvited(email: string): void;
}

const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputGuestsOpen, setInputGuestsOpen] = useState(false);
  const [modalGuestsOpen, setModalGuestsOpen] = useState(false);
  const [modalGuestsConfirm, setModalGuestsConfirm] = useState(false);
  const [emailInvited, setEmailInvited] = useState<string[]>([]);

  const handleInputGuestsOpen = () => {
    setInputGuestsOpen(true);
  };
  const handleInputGuestClose = () => {
    setInputGuestsOpen(false);
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
    <ModalContext.Provider
      value={{
        handleEmailInvited,
        handleInputGuestClose,
        handleInputGuestsOpen,
        handleModalGuestsClose,
        handleModalGuestsConfirmClose,
        handleModalGuestsConfirmOpen,
        handleModalGuestsOpen,
        handleRemoveEmailInvited,
        inputGuestsOpen,
        modalGuestsConfirm,
        modalGuestsOpen,
        emailInvited,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => useContext(ModalContext);
