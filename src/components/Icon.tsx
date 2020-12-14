import React from 'react'
import { StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface IIconProps { type: string, name: string };

const Icon = ({ type, name }: IIconProps) => {
    switch (type) {
        case 'Entypo':
            return <Entypo name={name} style={styles.icon} />
        case 'MaterialIcons':
            return <MaterialIcons name={name} style={styles.icon} />
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} style={styles.icon} />
        case 'AntDesign':
            return <AntDesign name={name} style={styles.icon} />
        case 'FontAwesome':
            return <FontAwesome name={name} style={styles.icon} />
        default:
            return <Entypo name={'home'} style={styles.icon} />
    }
}

export default Icon;

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
    }
})