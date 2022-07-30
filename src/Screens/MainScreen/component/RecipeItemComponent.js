import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const RecipeItemComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onView}
            style={{
                flex: 1,
                flexDirection: 'column',
                margin: '3%',
                borderRadius: RFValue(20),
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 1.2,
                shadowRadius: 3,
                elevation: 4,
                shadowColor: 'rgba(222,98,18,0.7)',
            }}>
            <Image
                style={styles.imageThumbnail}
                source={props.image}
            />
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );

}

export default RecipeItemComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(237,239,180,0.3)',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(150),
        borderRadius: RFValue(15),
    },
    text: {
        textAlign: 'center',
        fontSize: RFValue(14),
        color: 'brown'
    }

});