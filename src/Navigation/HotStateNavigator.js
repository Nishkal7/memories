import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Create from '../Create/Create';
import Bookmark from '../Bookmark/Bookmark';
import Profile from '../Profile/Profile';

const Stack = createMaterialBottomTabNavigator();

function HotStateNavigator() {
  return (
    <Stack.Navigator
    barStyle={{ backgroundColor: '#754752'}}
    backBehavior="history"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={23} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="layers-search" color={color} size={23} />
          ),
        }}
      />
       <Stack.Screen
        name="Create"
        component={Create}
        options={{
          headerShown: false,
          tabBarLabel: 'Create',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={23} />
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
            <MaterialCommunityIcons name="bookmark-multiple" color={color} size={23} />
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
            <MaterialCommunityIcons name="account-box" color={color} size={23} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HotStateNavigator;
