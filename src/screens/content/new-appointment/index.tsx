import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Dh, Dw } from '../../../utils/dimensions';

export default function NewAppoitment({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.selectedRegion}>
                <TextInput style={styles.textInput} />
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.map}><Text>Mapa</Text></View>
            <View style={styles.details}><Text>Detalhes</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',

    },
    selectedRegion: {
        alignItems: 'center',
        width: Dw,
        height: Dh * 0.25,
        backgroundColor: '#999'
    },
    textInput: {
        width: Dw * 0.75,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginTop:10,
        paddingLeft:5,
        paddingRight:5,
        height:40,
    },
    map: {
        width: Dw,
        height: Dh * 0.55,
        backgroundColor: '#EEE'
    },
    details: {
        width: Dw,
        height: Dh * 0.2,
        backgroundColor: '#999'
    }
});