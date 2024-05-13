"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
<<<<<<< Updated upstream
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
=======
import { EditServerModal } from "../modals/edit-server-modal";
>>>>>>> Stashed changes

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
<<<<<<< Updated upstream
      <CreateChannelModal />
=======
      <EditServerModal />
>>>>>>> Stashed changes
    </>
  );
};
