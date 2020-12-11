import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Imagem</Text>
      <Text>User</Text>
      <Text>senha</Text>
      <Text>Lembrar user</Text>
      <Text>Cadastre-se</Text>
      <Text>Entrar</Text>
      <Text>Não é cadastrado, clique aqui</Text>
      <Text>Faça login com</Text>
      <Text>Logo</Text>
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
