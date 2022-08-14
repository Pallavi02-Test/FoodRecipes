import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Shadow } from 'react-native-shadow-2';




const RecipeItemComponent = (props) => {

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

        // <Shadow>
        <View onLayout={() => determineAndSetOrientation()}>
            <TouchableOpacity
                onPress={props.onView}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: '5%',
                    borderRadius: RFValue(20),
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: RFValue(20),
                    // elevation: 2,
                    shadowColor: 'white',
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 5,
                    borderBottomColor: 'rgba(128,0,0,0.3)'
                }}>
                <Image
                    style={[styles.imageThumbnail, { 
                        width: orientation == true ?  160 : 300,
                        height: orientation == true ? 160 : 300
                    }]}
                    source={props.image}
                />

            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        // </Shadow>

    );

}

export default RecipeItemComponent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(237,239,180,0.3)',
        alignItems: 'center'
    },
    imageThumbnail: {
        width: 160,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'white',
        marginTop: '6%'

    },
    text: {
        textAlign: 'center',
        fontSize: RFValue(14),
        color: 'white',
        fontWeight: 'bold'
    }

});