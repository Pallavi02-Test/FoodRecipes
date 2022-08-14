import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { translate } from '../../../utils/languageHelper/I18n/i18n'
import { icons } from '../../constants/'


const HeaderWithLogo = ({ navigation }) => {

    const [orientation, setOrientation] = useState(true);

    const determineAndSetOrientation = () => {
        const screenWidth = Dimensions.get('window').width
        const screenHeight = Dimensions.get('window').height
        if (screenWidth > screenHeight) {
            setOrientation(false)
        } else {
            setOrientation(true)
        }
    }
    return (
        <View
            onLayout={() => determineAndSetOrientation()}
            style={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                height: orientation ==  true ? '12%': '20%',
                borderColor: '#231709',
                backgroundColor: '#4B371C',
                borderBottomWidth: 2,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                marginTop: '-0%'
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: orientation == true ? '13%' : '4%',
                    justifyContent: 'space-around',

                }}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('MainScreen');
                }}>
                    <MaterialCommunityIcons name="arrow-left" color={'#F0F3F6'} size={25} style={{ marginTop: -3, marginLeft: '10%' }} />
                </TouchableOpacity>

                <Text style={{
                    color: '#F0F3F6',
                    fontWeight: "bold",
                    marginLeft: '0%',
                    fontFamily: 'Lorem ipsum',
                    fontSize: 18
                }}>{translate('Header')}</Text>

                <Image
                    source={icons.chefhat}
                    style={{ width:  orientation ==  true ? '15%' : '8%', height: orientation == true ? '350%' : '380%', marginTop: orientation ==  true ? '-3%' :'-2%' }}
                />


            </View>

        </View>
    );
}

export default HeaderWithLogo;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '0%',
        backgroundColor: 'rgba(222,98,18,0.5)',
        height: '6%',
        borderRadius: RFValue(2),
        justifyContent: 'center',
        borderWidth: RFValue(1),
        borderColor: 'brown'
    },
    text: {
        fontSize: RFValue(20),
        color: 'brown',
        fontWeight: 'bold',
    }
})