import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../actions/login';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>{'Profile PAGE'}</Text>
      <TouchableOpacity onPress={() => dispatch(signout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
