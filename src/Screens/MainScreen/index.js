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
import data from '../../data/db.json';
import RecipeItemComponent from "./component/RecipeItemComponent";

const MainScreen = ({ navigation }) => {

    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//check if json data is fetching 



    useEffect(() => {
        setIsLoading(false);
        setContent(data.recipes);
    })

    return (

        <View style={styles.container} >
            <FlatList
                data={content}
                renderItem={({ item, index }) => (
                    <RecipeItemComponent
                        id={item.id}
                        image={{ uri: item.image }}
                        title={item.title}
                        onView={() => {
                            navigation.navigate('RecipeScreen', { recipe_Id: item.id });
                        }}
                    />

                )}

                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default MainScreen;

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