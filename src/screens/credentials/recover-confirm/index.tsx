import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Dw } from '../../../utils/dimensions';

export default function RecoverConfirm({ navigation }: any) {

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/support.png')} style={styles.imgSupport} />

            <Text style={styles.text}>Enviamos no e-mail informado o link para verificação. </Text>

            <TouchableOpacity style={styles.btnRedirecionar}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.txtBtnRedirecionar}>Voltar para login</Text>
            </TouchableOpacity>

            <Image source={require('../../../assets/images/logo.png')} style={styles.imgLogo} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgSupport: {
        width: Dw * 0.5,
        height: Dw * 0.4,
        marginBottom: 40,
        resizeMode: 'contain'
    },
    imgLogo: {
        width: Dw * 0.6,
        height: Dw * 0.2,
        resizeMode: 'contain',
        marginTop: 60
    },
    text: {
        width: Dw * 0.8,
        marginTop: 30,
        marginBottom: 10
    },
    btnRedirecionar: {
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
    txtBtnRedirecionar: {
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