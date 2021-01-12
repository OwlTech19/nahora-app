import React from 'react'
import { StyleSheet } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface IIconProps { type: string, name: string, propStyle: any };

const Icon = ({ type, name, propStyle }: IIconProps) => {
    switch (type) {
        case 'Entypo':
            return <Entypo name={name} style={[styles.icon, propStyle]} />
        case 'MaterialIcons':
            return <MaterialIcons name={name} style={[styles.icon, propStyle]} />
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} style={[styles.icon, propStyle]} />
        case 'AntDesign':
            return <AntDesign name={name} style={[styles.icon, propStyle]} />
        case 'FontAwesome':
            return <FontAwesome name={name} style={[styles.icon, propStyle]} />
        default:
            return <Entypo name={'home'} style={[styles.icon, propStyle]} />
    }
}

export default Icon;

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
    }
})