import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertModal = ({message, activeStatus, closeModal}) => {
  return (
    <AwesomeAlert
      show={activeStatus}
      showProgress={false}
      title="Oops! Something went wrong!"
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      onDismiss={closeModal}
      showCancelButton={false}
      showConfirmButton={true}
      cancelText="cancel"
      confirmText="Okay"
      confirmButtonColor="#9E7E85"
      onCancelPressed={closeModal}
      onConfirmPressed={closeModal}
    />
  );
};

export default AlertModal;
