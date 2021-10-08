import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Constants from '../utils/Constants';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import {useSelector} from 'react-redux';
import HotStateNavigator from './HotStateNavigator';

const Stack = createStackNavigator();

function ColdStateNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginStatus = useSelector(state => state?.login?.authData);

  useEffect(() => {
    if (
      loginStatus &&
      loginStatus != null &&
      loginStatus?.result &&
      loginStatus?.token
    ) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
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
                backgroundColor: Constants.APP_BACKGROUND_COLOR,
                elevation: 0, // for android
                shadowOpacity: 0, // for ios
                borderBottomWidth: 0,
              },
              headerTintColor: Constants.APP_THEME_COLOR,
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
                backgroundColor: Constants.APP_BACKGROUND_COLOR,
                elevation: 0, // for android
                shadowOpacity: 0, // for ios
                borderBottomWidth: 0,
              },
              headerTintColor: Constants.APP_THEME_COLOR,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      ) : (
        <HotStateNavigator />
      )}
    </NavigationContainer>
  );
}

export default ColdStateNavigator;
