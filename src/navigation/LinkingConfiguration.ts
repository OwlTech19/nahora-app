import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Credentials: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'Login',
            },
          },
          Register: {
            screens: {
              RegisterScreen: 'Register',
            },
          },
          Recover: {
            screens: {
              RecoverScreen: 'Recover',
            },
          },
          RecoverConfirm: {
            screens: {
              RecoverScreen: 'RecoverConfirm',
            },
          },
        },
      },
      Content: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'Login',
            },
          },
          NewAppoitment: {
            screens: {
              NewAppoitmentScreen: 'NewAppoitment',
            },
          },
          Schedule: {
            screens: {
              ScheduleScreen: 'Schedule',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'Settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
