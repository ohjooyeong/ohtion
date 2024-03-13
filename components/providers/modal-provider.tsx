'use client';

import { useEffect, useState } from 'react';

import { SettingsModal } from '@/components/modals/settings-modal';

export const ModalProvider = () => {
  const [iseMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!iseMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
    </>
  );
};
