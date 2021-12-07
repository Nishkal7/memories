import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Constants from '../utils/Constants';
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import CreateNavigator from "./CreateNavigator";
import Home from '../Home/Home';
import Search from '../Search/Search';
import Create from '../Create/Create';
import Bookmark from '../Bookmark/Bookmark';
import Profile from '../Profile/Profile';

const Stack = createMaterialBottomTabNavigator();

function HotStateNavigator() {
  return (
    <Stack.Navigator
      barStyle={{backgroundColor: Constants.APP_BACKGROUND_COLOR}}
      activeColor={Constants.APP_THEME_COLOR}
      inactiveColor={Constants.LIGHT_GREY}
      backBehavior="history">
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={23} />
          ),
        }}
      />
      <Stack.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        backBehavior="history"
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="layers-search"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateNavigator"
        component={CreateNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Create',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerShown: false,
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={23}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HotStateNavigator;
