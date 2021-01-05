import React, { useState } from 'react';
import { TouchableOpacity, Image, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Dw } from '../../../utils/dimensions';
import * as firebase from 'firebase';

export default function Recover({ navigation }: any) {
  const [email, setEmail] = useState('');

  const resetPass = () => {
    firebase.auth().sendPasswordResetEmail(email);
    navigation.navigate('RecoverConfirm');
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.imgLogo} />

      <Text style={styles.text}>Para recuperar sua senha, digite o e-mail cadastrado: </Text>
      <TextInput placeholder="E-mail" style={styles.input} onChangeText={e => setEmail(e)} />

      <TouchableOpacity style={styles.btnEntrar}
        onPress={resetPass}
      >
        <Text style={styles.txtBtnEntrar}>
          Enviar
        </Text>
      </TouchableOpacity>

      <View style={styles.viewVoltar}>
        <Text>Voltar a tela de login? </Text>
        <TouchableOpacity activeOpacity={1}
          onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textLnk]}>Clique aqui</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: Dw * 0.5,
    height: Dw * 0.2,
    marginBottom: 40,
    resizeMode: 'contain'
  },
  input: {
    width: Dw * 0.8,
    height: 50,
    borderRadius: 5,
    borderColor: 'rgb(60,180,194)',
    borderWidth: 1.5,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    width: Dw * 0.8,
    marginBottom: 10
  },
  btnEntrar: {
    width: Dw * 0.8,
    height: 50,
    borderRadius: 5,
    borderWidth: 1.5,
    marginBottom: 15,
    backgroundColor: 'rgb(60,180,194)',
    borderColor: 'rgb(30,130,174)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnEntrar: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
  },
  viewVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  textLnk: {
    fontSize: 14,
    color: 'blue'
  }
});
