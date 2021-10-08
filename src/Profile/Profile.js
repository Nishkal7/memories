import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {signout} from '../actions/login';
import profile1 from '../Public/Images/profile1.jpeg';
import profile2 from '../Public/Images/profile2.jpeg';
import profile3 from '../Public/Images/profile3.jpeg';
import profile4 from '../Public/Images/profile4.jpeg';
import profile5 from '../Public/Images/profile5.jpeg';
import profile6 from '../Public/Images/profile6.jpeg';
import profile7 from '../Public/Images/profile7.jpeg';
import profile8 from '../Public/Images/profile8.jpeg';
import profile9 from '../Public/Images/profile9.jpeg';
import profile10 from '../Public/Images/profile10.jpeg';
import profile11 from '../Public/Images/profile11.jpeg';
import profile12 from '../Public/Images/profile12.jpeg';
import profile13 from '../Public/Images/profile13.jpeg';
import profile14 from '../Public/Images/profile14.jpeg';
import styles from './styles';

const Profile = () => {
  const images = [
    profile1,
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9,
    profile10,
    profile11,
    profile12,
    profile13,
    profile14,
  ];

  const dispatch = useDispatch();
  const userData = useSelector(state => state?.login?.authData?.result);

  // useEffect(() => {
  // }, [userData]);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={images[Math.floor(Math.random() * 14 + 1)]}
        />
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.singleInfoContainer}>
          <Text style={styles.leftText}>First Name: </Text>
          <Text numberOfLines={1} style={styles.rightText}>
            {userData?.name?.split(' ')[0]}
          </Text>
        </View>
        <View style={styles.singleInfoContainer}>
          <Text style={styles.leftText1}>Last Name: </Text>
          <Text numberOfLines={1} style={styles.rightText}>
            {userData?.name?.split(' ')[1]}
          </Text>
        </View>
        <View style={styles.singleInfoContainer}>
          <Text style={styles.leftText2}>Email: </Text>
          <Text numberOfLines={1} style={styles.rightText}>
            {userData?.email}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.profileEditContainer}
        disabled={true}
        // onPress={() => dispatch(signout())}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.profileLogoutContainer}
        onPress={() => dispatch(signout())}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
