import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import useColorScheme from '../hooks/useColorScheme';
import { ContentParamList } from '../types';

import Login from '../screens/credentials/login';
import Recover from '../screens/credentials/recover';
import Register from '../screens/credentials/register';
import { Settings } from 'react-native';
import Home from '../screens/content/home';

const ContentTab = createStackNavigator<ContentParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ContentTab.Navigator
      initialRouteName="Home"
    >
      <ContentTab.Screen
        name="Home"
        component={Home}
      />
      {/*
      <ContentTab.Screen
        name="NewAppointment"
        component={NewAppointment}
      />
      <ContentTab.Screen
        name="Schedule"
        component={Schedule}
      />
      <ContentTab.Screen
      name="Settings"
      component={Settings}
      />
     */}
    </ContentTab.Navigator>
  );
}