import React, { useState, useEffect } from 'react';
import { Alert, CheckBox, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Dw, Dh } from '../../../utils/dimensions';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'
import * as Google from 'expo-google-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AND_CLIENT_ID } from '../../../assets/env';

interface userLogged {
  email?: string;
  password: string;
}

export default function Login({ navigation }: any) {

  const [login, setLogin]: any = useState({
    email: 'owl@teste.com',
    password: '123456',
  });
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    //loadRemeber();
  }, []);

  const validLogin = async () => {

    firebase.auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then(res => {

        const userLogged: userLogged = {
          email: res?.user?.email || '',
          password: login.password
        }

        console.log('valid', userLogged)

        if (remember) {
          AsyncStorage.setItem('user', JSON.stringify(userLogged));
        }

        AsyncStorage.setItem('userRemember', JSON.stringify(remember));

        navigation.navigate('Content');
      })
      .catch(function (error) {
        ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
        setLogin({ ...login, password: '' });
      });
  }

  const handleSetRemeber = () => {
    setRemember(!remember);
  }

  const loadRemeber = async () => {
    let _remember = await AsyncStorage.getItem('userRemember');
    setRemember(_remember == 'true' ? true: false);

    if (_remember == 'true') {

      let userLogged: any = await AsyncStorage.getItem('user');
      userLogged = JSON.parse(userLogged);

      await setLogin({ email: userLogged.email, password: userLogged.password });

      console.log('load', login)

      validLogin();
    }
  }

  const loginWithFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '415749139546748',
      });
      const {
        type,
        // token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const loginWithGoogleAsync = async () => {
    console.log('Chamou');
    try {
      const result = await Google.logInAsync({
        androidClientId: AND_CLIENT_ID,
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const loginWithGoogle = () => {
    loginWithGoogleAsync()
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.imgLogo} />

      <TextInput placeholder="E-mail" style={styles.input} value={login.email} onChangeText={e => setLogin({ ...login, email: e })} />
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} value={login.password} onChangeText={e => setLogin({ ...login, password: e })} />

      <View style={styles.viewRow}>
        <View style={styles.viewChk}>
          <CheckBox value={remember} onChange={handleSetRemeber} />
          <Text style={styles.textChk} onPress={handleSetRemeber}>Lembrar credenciais </Text>
        </View>
        <TouchableOpacity activeOpacity={1}
          onPress={() => navigation.navigate('Recover')}>
          <Text style={styles.textLnk}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}
        onPress={() => validLogin()}>
        <Text style={styles.txtBtnEntrar}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.viewCad}>
        <Text>Não é cadastrado? </Text>
        <TouchableOpacity activeOpacity={1}
          onPress={() => navigation.navigate('Register')} >
          <Text style={[styles.textLnk, { fontSize: 14 }]}>Clique aqui</Text>
        </TouchableOpacity>
      </View>

      <Text>Se preferir, faça login com:</Text>
      <View style={styles.viewLoginIcon}>
        <TouchableOpacity activeOpacity={1}
          onPress={() => loginWithFacebook()}>
          <Image source={require('../../../assets/images/facebook.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}
          onPress={() => loginWithGoogle()}>
          <Image source={require('../../../assets/images/google.png')} style={styles.image} />
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
  checkbox: {
    color: 'rgb(60,180,194)',
  },
  viewRow: {
    width: Dw * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  viewChk: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textChk: {
    fontSize: 12
  },
  textLnk: {
    fontSize: 12,
    color: 'blue'
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
  viewCad: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  viewLoginIcon: {
    width: Dw * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    height: Dh * 0.065,
    width: Dh * 0.065,
    resizeMode: "stretch",
  }
});
