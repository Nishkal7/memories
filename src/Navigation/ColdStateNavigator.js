import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';

const Stack = createStackNavigator();

function ColdStateNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={({navigation}) => ({
            title: 'Sign Up',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#eeebe8',
              elevation: 0, // for android
              shadowOpacity: 0, // for ios
              borderBottomWidth: 0,
            },
            headerTintColor: '#754847',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerLeft: () => (
            //   <Button
            //     onPress={() =>  navigation.navigate('Login')}
            //     title="Back"
            //     // color="#fff"
            //   />
            // ),
          })}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#eeebe8',
              elevation: 0, // for android
              shadowOpacity: 0, // for ios
              borderBottomWidth: 0,
            },
            headerTintColor: '#754847',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ColdStateNavigator;
