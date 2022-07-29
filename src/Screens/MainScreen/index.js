import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { icons } from '../../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as RNFS from 'react-native-fs';
import recipes from '../../data/db.json'

const MainScreen = () => {

    const [content, setContent] = useState(null);



    useEffect(() => {
        setContent(JSON.stringify(recipes));
        console.log("Recipes : ", content)
    })

    return (
        <View>
            <FlatList
                data={content}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    console.log("Recipes Item : ",item)
                }}
            />
        </View>
    );

}

export default MainScreen;