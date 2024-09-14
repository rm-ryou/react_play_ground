import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalPresentational } from './ModalPresentational';

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('..');
  };

  return <ModalPresentational children={children} closeModal={closeModal} />;
};

export { ModalContainer };
