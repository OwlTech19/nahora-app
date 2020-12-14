import React from 'react';
import { CheckBox, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dw, Dh } from '../../../utils/dimensions';

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo.png')} style={styles.imgLogo} />

      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />

      <View style={styles.viewRow}>
        <View style={styles.viewChk}>
          <CheckBox />
          <Text style={styles.textChk}>Lembrar credenciais </Text>
        </View>
        <TouchableOpacity activeOpacity={1}
          onPress={() => navigation.navigate('Recover')}>
          <Text style={styles.textLnk}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnEntrar}>
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
        <TouchableOpacity activeOpacity={1}>
          <Image source={require('../../../assets/images/facebook.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1}>
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
