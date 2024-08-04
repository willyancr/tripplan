'use client';
import React, { createContext, useContext, useState } from 'react';
import { Links } from '../components/trip-details/important-links';
import { Participants } from '../components/trip-details/guests';
import { api } from '../lib/axixos';

interface Activities {
  date: string;
  activities: { id: string; title: string; date_created: string }[];
}
interface DeleteActivity {
  slug: string;
  activityID: string;
}
interface DeleteLink {
  slug: string;
  linkId: string;
  setLinks: (links: Links[]) => void;
}
interface DeleteParticipant {
  slug: string;
  participantID: string;
  setParticipants: (participants: Participants[]) => void;
}

interface TripDetailsContextProps {
  activities: Activities[];
  setActivities: React.Dispatch<React.SetStateAction<Activities[]>>;
  buttonCreateActivityOpen: boolean;
  buttonRegisterLinkOpen: boolean;
  buttonManageGuestsOpen: boolean;
  buttonUpdateDestinationOpen: boolean;
  handleDeleteLink: ({ slug, linkId, setLinks }: DeleteLink) => void;
  handleDeleteActivity: ({ slug, activityID }: DeleteActivity) => void;
  handleDeleteGuest: ({
    slug,
    participantID,
    setParticipants,
  }: DeleteParticipant) => void;
  handleButtonCreateActivityOpen: () => void;
  handleButtonCreateActivityClose: () => void;
  handleButtonRegisterLinkOpen: () => void;
  handleButtonRegisterLinkClose: () => void;
  handleButtonManageGuestsOpen: () => void;
  handleButtonManageGuestsClose: () => void;
  handleButtonUpdateDestinationOpen: () => void;
  handleButtonUpdateDestinationClose: () => void;
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
  const [buttonUpdateDestinationOpen, setButtonUpdateDestinationOpen] =
    useState(false);

  const [activities, setActivities] = useState<Activities[]>([]);

  function handleDeleteActivity({ slug, activityID }: DeleteActivity) {
    api
      .delete(`/trips/${slug}/activities/${activityID}`)
      .then(() => {
        return api.get(`/trips/${slug}/activities`);
      })
      .then((response) => {
        setActivities(response.data.activities);
      });
  }
  function handleDeleteLink({ slug, linkId, setLinks }: DeleteLink) {
    api
      .delete(`/trips/${slug}/links/${linkId}`)
      .then(() => {
        return api.get(`/trips/${slug}/links`);
      })
      .then((response) => {
        setLinks(response.data.links);
      });
  }
  function handleDeleteGuest({
    slug,
    participantID,
    setParticipants,
  }: DeleteParticipant) {
    api
      .delete(`/participants/${participantID}`)
      .then(() => {
        return api.get(`/trips/${slug}/participants`);
      })
      .then((response) => {
        setParticipants(response.data.participants);
      });
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
  const handleButtonUpdateDestinationOpen = () => {
    setButtonUpdateDestinationOpen(true);
  };
  const handleButtonUpdateDestinationClose = () => {
    setButtonUpdateDestinationOpen(false);
  };
  return (
    <TripDetailsContext.Provider
      value={{
        handleDeleteActivity,
        handleDeleteLink,
        handleDeleteGuest,
        activities,
        setActivities,
        handleButtonCreateActivityOpen,
        buttonCreateActivityOpen,
        handleButtonRegisterLinkOpen,
        buttonRegisterLinkOpen,
        handleButtonCreateActivityClose,
        handleButtonRegisterLinkClose,
        handleButtonManageGuestsOpen,
        buttonManageGuestsOpen,
        handleButtonManageGuestsClose,
        handleButtonUpdateDestinationClose,
        handleButtonUpdateDestinationOpen,
        buttonUpdateDestinationOpen,
      }}
    >
      {children}
    </TripDetailsContext.Provider>
  );
};
export const useTripDetails = () => useContext(TripDetailsContext);
