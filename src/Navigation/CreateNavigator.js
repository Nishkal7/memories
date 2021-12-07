import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Create from '../Create/Create';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function CreateNavigator() {
  return (
    <Stack.Navigator initialRouteName="Create">
      <Stack.Screen
        name="Create"
        component={Create}
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
    </Stack.Navigator>
  );
}

export default CreateNavigator;
