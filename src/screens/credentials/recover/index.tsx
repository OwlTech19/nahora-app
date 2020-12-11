import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet,Text, View } from 'react-native';

export default function Recover({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text>
          Go to Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text>
          Go to Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
