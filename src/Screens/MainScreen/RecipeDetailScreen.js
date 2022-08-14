import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions ,ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import HeaderWithLogo from './HeaderWithLogo'
import { TouchableOpacity } from "react-native-gesture-handler";
import { translate, changeLanguage as changeLang } from '../../../utils/languageHelper/I18n/i18n'

let recipeId;

const RecipeScreen = ({ route, navigation }) => {


    const { recipe_item } = route.params;
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
        <LinearGradient
            colors={['#352315', '#352315', '#9A7B4F']}>
            <SafeAreaView
                onLayout={() => determineAndSetOrientation()}
                style={{ height: '100%', width: '100%' }}>
                <StatusBar backgroundColor={'transparent'}
                    barStyle={"light-content"}
                />
                <HeaderWithLogo navigation={navigation} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                    <View style={{
                        marginTop: orientation == true ? '20%' : '5%',
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: RFValue(20), color: 'white', fontWeight: 'bold' }}>{recipe_item.title}</Text>
                    </View>
                    <View style={{
                        height: '28%',
                        marginTop: orientation == true ? '20%' : '5%',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        shadowColor: 'white',
                        elevation: 2,
                        alignItems: 'center',
                    }}>
                        <YoutubePlayer
                            height={orientation == true ? RFValue(300) : RFValue(180)}
                            width={orientation == true ? RFValue(350) : RFValue(350)}
                            play={false}
                            videoId={recipe_item.video}
                        />
                    </View>

                    <View style={{ marginTop: '20%', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFValue(14), color: 'white', textAlign: 'center' }}>{recipe_item.details}</Text>
                    </View>
                    <View style={{ marginTop: '10%' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('HTMLViewScreen')}
                        >
                            <Text style={{ fontSize: RFValue(14), color: '#59260B', fontWeight: 'bold', textAlign: 'center' }}>
                                {translate('HTMLView')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>
    );

}

export default RecipeScreen;

const styles = StyleSheet.create({

    container: {

    },

})