import React from 'react';
import Modal from 'react-modal';
import DeviceModalContent from './DeviceModalContent';
const customStyles = {
  content: {
    top: '50%',
    left: '70%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DeviceModal = ({ id, type, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <DeviceModalContent id = {id} type = {type}/>
    </Modal>
  )
};

export default DeviceModal