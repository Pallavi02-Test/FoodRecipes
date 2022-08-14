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
    StatusBar,
    Animated,
    Dimensions
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import data from '../../data/db.json';
import RecipeItemComponent from "./component/RecipeItemComponent";
import { getData } from '../../../utils/apiHelper'
import Header from './component/Header'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const MainScreen = ({ navigation }) => {

    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);//check if json data is fetching 
    const [data, setData] = useState([]);
    const newSeasonScrollaX = React.useRef(new Animated.Value(0)).current;

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

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])


    useEffect(() => {
        setIsLoading(false);
        setContent(data.recipes);
    })

    return (

        <LinearGradient
            colors={['#352315', '#352315', '#9A7B4F']}>
            <SafeAreaView
                onLayout={() => determineAndSetOrientation()}
                style={{ height: '100%', width: '100%' }}>
                <StatusBar backgroundColor={'transparent'}
                    barStyle={"light-content"}
                />
                <Header navigation={navigation} />
                <FlatList
                    data={content}
                    style={styles.container}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <RecipeItemComponent
                            id={item.id}
                            image={{ uri: item.image }}
                            title={item.title}
                            onView={() => {
                                navigation.navigate('RecipeScreen', { recipe_item: item });
                            }}
                            numColumns={3}
                        />
                    )}
                    numColumns={2}
                />

            </SafeAreaView>
        </LinearGradient>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'rgba(237,239,180,0.3)',

    },



});