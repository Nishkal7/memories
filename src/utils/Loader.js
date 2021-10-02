import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

{
  /* <Loader  activeStatus={toggleAlert}/>   - Import and use it in required places */
}

const AlertModal = ({activeStatus}) => {
  return (
    <AwesomeAlert
      show={activeStatus}
      showProgress={true}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      //onDismiss={closeModal}
    />
  );
};

export default AlertModal;
