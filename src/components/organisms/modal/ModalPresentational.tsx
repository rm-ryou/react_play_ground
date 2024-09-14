import React from 'react';

import classes from './ModalPresentational.module.css';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalPresentational = (props: ModalProps) => {
  return (
    <>
      <div
        className={classes.background}
        onClick={props.closeModal}
        data-testid="modal-background"
      />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export { ModalPresentational };
