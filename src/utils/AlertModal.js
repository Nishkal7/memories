import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as Constants from "./Constants";

const AlertModal = ({message, activeStatus, closeModal}) => {
  return (
    <AwesomeAlert
      show={activeStatus}
      showProgress={false}
      title=""
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      onDismiss={closeModal}
      showCancelButton={false}
      showConfirmButton={true}
      cancelText="cancel"
      confirmText="Okay"
      confirmButtonColor={Constants.ALERT_CONFIRM}
      onCancelPressed={closeModal}
      onConfirmPressed={closeModal}
    />
  );
};

export default AlertModal;
