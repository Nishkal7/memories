import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Constants from '../utils/Constants';
import Search from '../Search/Search';
import PostDetail from '../PostDetail/PostDetail';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({navigation, route}) => ({
          title: route?.params?.post?.title,
          headerTitleAlign: 'center',
          headerMode: 'float',
          headerStyle: {
            // backgroundColor: Constants.APP_BACKGROUND_COLOR,
            elevation: 0, // for android
            shadowOpacity: 0, // for ios
            borderBottomWidth: 0,
          },
          headerTransparent: true,
          headerTintColor:'#FFFFFF',
        })}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
