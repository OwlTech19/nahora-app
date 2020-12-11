import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Recover')}
      >
        <Text>
          Home
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
