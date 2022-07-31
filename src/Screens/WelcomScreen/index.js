import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { icons } from '../../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from 'react-native-element-dropdown';
import { translate, changeLanguage as changeLang } from '../../../utils/languageHelper/I18n/i18n'


const WelcomeScreen = ({navigation}) => {

    const changeLanguage = value => {
        console.log("Value : ", value);
        changeLang(value);
    };


    const langugaes = [
        { label: 'English', value: 'en' },
        { label: 'French', value: 'fr' },

    ];

    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <SafeAreaView>
            <ImageBackground
                source={icons.backgroundImage}
                resizeMode="cover" style={styles.image}
            >
                <View style={styles.innerFrame}>

                    <View style={styles.textComponent}>
                        <Text style={styles.text} >{translate('Apptitle')}</Text>
                    </View>

                    <Text style={styles.dropdownComponent}> {translate('LanguageMessage')}</Text>

                    <View >

                        <Dropdown
                            style={[styles.dropdown, { marginLeft: '2%' }, isFocus && { borderColor: 'white' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={langugaes}
                            containerStyle={{ backgroundColor: 'white' }}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select location' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                                changeLanguage(item.value);
                            }}

                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MainScreen')}
                        >
                            <Text style={styles.buttonText}>{translate('Next')} -{'>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ImageBackground>
        </SafeAreaView>
    );

}

export default WelcomeScreen;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    innerFrame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    textComponent: {
        marginTop: hp('0%'),
        alignItems: 'center',
    },
    text: {
        color: "rgba(255,255,255,0.8)",
        fontSize: RFValue(20),
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdownComponent: {
        fontWeight: 'bold',
        fontSize: RFValue(14),
        color: 'rgba(255,255,255,0.8)',
        marginBottom: RFValue(5),
        marginTop: '10%'
    },
    dropdown: {
        width: RFValue(150),
        height: '22%',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(128,128,128,0.3)',
        marginLeft: '15%'
    },
    icon: {
        marginRight: 5,
    },

    placeholderStyle: {
        fontSize: RFValue(14),
        color: 'rgba(255,255,255,0.5)'
    },
    selectedTextStyle: {
        fontSize: RFValue(14),
        color: 'black'
    },
    iconStyle: {
        width: RFValue(20),
        height: RFValue(20),
        tintColor: 'white'
    },
    inputSearchStyle: {
        height: RFValue(40),
        fontSize: RFValue(16),
        backgroundColor: 'rgba(255,255,255,0.8)',
        color: 'black'
    },

    buttonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: RFValue(20),
    }
});