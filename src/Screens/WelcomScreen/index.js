import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
import { icons } from '../../constants'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dropdown } from 'react-native-element-dropdown';
import { translate, changeLanguage as changeLang } from '../../../utils/languageHelper/I18n/i18n'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '../../config';


const WelcomeScreen = ({ navigation }) => {

    const [lang, setLang] = useState();

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

    const changeLanguage = async (value) => {
        changeLang(value);

    };

    const getLang= async () => {
        try {
            const value = await AsyncStorage.getItem(Config.storage_key.USER_LANGUAGE_SELECTED,)
            if (value !== null) {
                console.log("Language Value : ", value)
                setLang(value);
            }
        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getLang();
    })



    const langugaes = [
        { label: 'English', value: 'en' },
        { label: 'French', value: 'fr' },

    ];

    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <LinearGradient
            colors={['#352315', '#352315', '#9A7B4F']}>
            <SafeAreaView
                onLayout={() => determineAndSetOrientation()}
                style={{ height: '100%', width: '100%' }}>
                <StatusBar backgroundColor={'transparent'}
                    barStyle={"light-content"}
                />

                <Image
                    style={{
                        width: '100%',
                        height: '30%',
                        borderRadius: 0.3,
                        borderWidth: 0.3,
                        borderRadius: 10,
                        borderBottomWidth: 1,
                        borderColor: '#c47a38'

                    }}
                    source={icons.backgroundImage}
                />



                <View style={styles.textComponent}>
                    <Text style={styles.text} >{translate('Apptitle')}</Text>
                </View>

                {orientation == true ? (
                    <View>
                        <Text style={styles.dropdownComponent}> {translate('LanguageMessage')}</Text>

                        <View >

                            <Dropdown
                                style={[styles.dropdown, { marginLeft: '2%' }, isFocus && { borderColor: 'white' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={langugaes}
                                activeColor={'transparent'}
                                containerStyle={{ backgroundColor: '#9A7B4F' }}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Language' : '...'}
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

                        <View style={{ alignItems: 'center', marginTop:'10%' }}>
                            <TouchableOpacity
                                style={{
                                    width: '40%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 26,
                                    borderWidth: 1,
                                    borderColor: 'white'
                                }}
                                onPress={() => navigation.navigate('MainScreen')}
                            >
                                <Text style={styles.buttonText}>{translate('Next')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View>
                        

                        <View  style={{flexDirection:'row', justifyContent: 'center'}}>
                        <Text style={[styles.dropdownComponent,{marginTop: '5%',}]}> {translate('LanguageMessage')}</Text>
                            <Dropdown
                                style={[styles.dropdown, { marginLeft: '3%' ,marginTop:'4%',height:'35%'}, isFocus && { borderColor: 'white' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={langugaes}
                                activeColor={'transparent'}
                                containerStyle={{ backgroundColor: '#9A7B4F' }}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Language' : '...'}
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

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    width: '25%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 26,
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    marginTop:'4%'
                                }}
                                onPress={() => navigation.navigate('MainScreen')}
                            >
                                <Text style={styles.buttonText}>{translate('Next')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}


            </SafeAreaView>
        </LinearGradient>
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

    },
    textComponent: {
        marginTop: '10%',
        alignItems: 'center',
    },
    text: {
        color: "rgba(255,255,255,0.7)",
        fontSize: RFValue(20),
        textAlign: "center",
        fontWeight: "bold",
    },
    dropdownComponent: {
        fontWeight: 'bold',
        fontSize: RFValue(14),
        color: 'rgba(255,255,255,0.8)',
        marginBottom: RFValue(5),
        marginTop: '15%',
        textAlign: 'center',
    },
    dropdown: {
        width: RFValue(150),
        height: '30%',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(128,128,128,0.3)',
        marginLeft: '15%',
        alignSelf: 'center',
        marginTop: '2%'
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
        color: 'white',
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
        color: 'black',
    },

    buttonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: RFValue(20),
    }
});