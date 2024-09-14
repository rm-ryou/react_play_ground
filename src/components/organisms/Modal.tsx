import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate('..')
  };

  return (
    <>
      <div className={classes.background} onClick={closeModal} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
