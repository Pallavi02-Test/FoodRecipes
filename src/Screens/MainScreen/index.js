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
// import data from '../../data/db.json';
import RecipeItemComponent from "./component/RecipeItemComponent";
import { getData } from '../../../utils/apiHelper'
import Header from './component/Header'

const MainScreen = ({ navigation }) => {

    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//check if json data is fetching 
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])


    useEffect(() => {
        setIsLoading(false);
        setContent(data.recipes);
    })

    return (

        <SafeAreaView style={styles.container} >
            <Header/>
            <FlatList
                data={content}
                renderItem={({ item, index }) => (
                    <RecipeItemComponent
                        id={item.id}
                        image={{ uri: item.image }}
                        title={item.title}
                        onView={() => {
                            navigation.navigate('RecipeScreen', { recipe_item: item });
                        }}
                    />

                )}

                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
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