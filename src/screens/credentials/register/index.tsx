import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ToastAndroid } from 'react-native';
import { Dw } from '../../../utils/dimensions';
import * as firebase from 'firebase';


export default function Register({ navigation }: any) {

  const [login, setLogin]: any = useState( {
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const register = () => {

    firebase.auth()
      .createUserWithEmailAndPassword(login.email, login.password)
      .then(res => {
        ToastAndroid.show('Cadastrado com sucesso, realize o login!', ToastAndroid.SHORT);
        navigation.navigate('Login');
      })
      .catch(function (error) {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
      });
  }

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/images/logo.png')} style={styles.imgLogo} />

      <TextInput placeholder="Nome" style={styles.input} value={login.name} onChangeText={e => setLogin({...login,name: e})} />
      <TextInput placeholder="Sobrenome" style={styles.input} value={login.lastName} onChangeText={e => setLogin({...login,lastName: e})}/>
      <TextInput placeholder="E-mail" style={styles.input} value={login.email} onChangeText={e => setLogin({...login,email: e})}/>
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} value={login.password} onChangeText={e => setLogin({...login,password: e})}/>

      <TouchableOpacity style={styles.btnCadastrar}
      onPress={() => register()}>
        <Text style={styles.txtBtnCadastrar}>Cadastrar</Text>
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
  btnCadastrar: {
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
  txtBtnCadastrar: {
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
