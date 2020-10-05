import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItemSeparator from './ListItemSeparator';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

function ListItemDeleteAction({onPress}){
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" color={colors.white} size={35}></MaterialCommunityIcons>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems:"center"
    }
})

export default ListItemDeleteAction;