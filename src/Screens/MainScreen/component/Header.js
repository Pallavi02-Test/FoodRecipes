import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { translate, changeLanguage as changeLang } from '../../../../utils/languageHelper/I18n/i18n'


const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{translate('HeaderTitle')}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginTop: '0%', 
        backgroundColor: 'rgba(222,98,18,0.5)',
        height:'6%',
        borderRadius: RFValue(2),
        justifyContent: 'center',
        borderWidth:RFValue(1),
        borderColor:'brown'
    },
    text:{
        fontSize:RFValue(20), 
        color:'brown', 
        fontWeight:'bold', 
    }
})