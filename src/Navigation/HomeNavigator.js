import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Constants from '../utils/Constants';
import Home from '../Home/Home';
import PostDetail from '../PostDetail/PostDetail';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{
          headerShown: false,
        }}
        // options={{
        //   title: 'PostDetail',
        //   headerTitleAlign: 'center',
        //   headerStyle: {
        //     backgroundColor: Constants.APP_BACKGROUND_COLOR,
        //     elevation: 0, // for android
        //     shadowOpacity: 0, // for ios
        //     borderBottomWidth: 0,
        //   },
        //   headerTintColor: Constants.APP_THEME_COLOR,
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
