import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import { CredentialsParamList } from '../types';

import Login from '../screens/credentials/login';
import Recover from '../screens/credentials/recover';
import Register from '../screens/credentials/register';
import RecoverConfirm from '../screens/credentials/recover-confirm';

const CredentialsTab = createStackNavigator<CredentialsParamList>();

export default function CredentiaslsTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <CredentialsTab.Navigator
      initialRouteName="Login"
    >
      <CredentialsTab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <CredentialsTab.Screen
        name="Recover"
        component={Recover}
        options={{ headerShown: false }}
      />
      <CredentialsTab.Screen
        name="RecoverConfirm"
        component={RecoverConfirm}
        options={{ headerShown: false }}
      />
      <CredentialsTab.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </CredentialsTab.Navigator>
  );
}