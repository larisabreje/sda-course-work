import React, { useState, useContext } from 'react';
import { globalContext } from './context/Context';
import Modal from 'react-modal';
import CreateTask from './CreateTask';
const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "16px",
    background: '#fff',
    padding: '20px',
  },
};
const ModalComp = () => {
  const { modalState, modalType } = useContext(globalContext);
  const [stateModal, setStateModal] = modalState;
  const  [typeModal, setTypeModal] = modalType


    const changeModalType = () => {
     switch (typeModal){
        case "CREATE TASK" :
        return <CreateTask />;
        default :
        return null
     }   
    }
  return (
    <Modal
      isOpen={stateModal}
      onRequestClose={() => setStateModal(false)}
      style={style}
      contentLabel="Example Modal"
    >
      <button onClick={() => setStateModal(false)}>Close Modal</button>
      {changeModalType()}
    </Modal>
  );
};
export default ModalComp;
