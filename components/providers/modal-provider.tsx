'use client';

import { useEffect, useState } from 'react';

import { SettingsModal } from '@/components/modals/settings-modal';
import { CoverImageModal } from '@/components/modals/cover-image-modal';

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
      <CoverImageModal />
    </>
  );
};
