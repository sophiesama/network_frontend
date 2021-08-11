import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DeviceModal = ({ id, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={onRequestClose}>close{id}</button>
    </Modal>
  )
};

// const mapStateToProps = (state) => {
//   return {
//     showModal: state.modalsStore.showDeviceModal 
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   closeModal: () => dispatch({ type: "HideDeviceModal" })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(DeviceModal);
export default DeviceModal