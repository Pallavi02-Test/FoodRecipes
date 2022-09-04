import React, { useRef, useEffect, useState } from "react";
import { View, Animated, Image, Text, Dimensions, ScrollView, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { icons } from "../../constants";
import MovieItemComponent from './Component/movieItemComponent';



const Home = () => {
    const [pageCurrent, setpageCurrent] = useState(1)
    const [movieData, setMovieData] = useState([]);
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [slectedItem, setSlectedItem] = useState('');

    const newSeasonScrollaX = React.useRef(new Animated.Value(0)).current;



    const LoadRMovieData = () => {
        fetch(`http://www.omdbapi.com/?s=Batman&apikey=eeefc96f&page=${pageCurrent}`).
            then(response => response.json())
            .then(responseJson => {
                setMovieData(responseJson.Search);
            }).catch(error => {
                console.log('Error selecting random data: ' + error)
            })
    }

    const onPressItem = (item) => {
        showModal(item);
    };
    const showModal = (item) => {
        setVisibleDialog(true);
        setSlectedItem(item);
    };

    

    const moviesList = () => {
        return (
            <Animatable.View
                animation={"fadeInRight"} delay={3000}>
                <Animated.FlatList
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    decelerationRate={0}
                    contentContainerStyle={{ marginTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={movieData}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={ListHeader}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { x: newSeasonScrollaX },
                                },
                            },
                        ],
                        { useNativeDriver: false },
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ margin: 0 }}>
                                <MovieItemComponent
                                    id={item.imdbID}
                                    poster={item.Poster}
                                    item={item}
                                    onPressItem={() => onPressItem(item)}
                                />
                            </View>
                        );
                    }}
                />
            </Animatable.View>
        );
    };

    useEffect(() => {
        LoadRMovieData();
    }, [pageCurrent]);


    const handlePreviousPage = () => {
        setpageCurrent(pageCurrent - 1 < 1 ? 1 : pageCurrent - 1)
    }

    const handleNextPage = () => {
        setpageCurrent(pageCurrent >= 52 ? 1 : pageCurrent + 1)
    }

    const ListHeader = () => {
        //View to set in Header
        return (
            <View style={styles.headerStyle}>

                <TouchableOpacity onPress={() => handlePreviousPage()}>
                    <Image
                        source={icons.left_icon}
                        style={{ width: 14, height: 25, marginTop: 2 }}
                        tintColor='black'
                    />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>{pageCurrent} of 52 </Text>
                <TouchableOpacity onPress={() => handleNextPage()}>
                    <Image source={icons.right_icon}
                        style={{ width: 14, height: 25 }}
                        tintColor='black'
                    />
                </TouchableOpacity>
            </View>


        );
    };


    return (
        <View style={{
            paddingTop: 100,
            paddingBottom: 25,
            backgroundColor: '#e5e8e9',
            alignItems: 'center'
        }}>

            {moviesList()}

        </View>
    );

};

export default Home;

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '2.5%',
        marginRight: '15%',
        marginTop: '8%',
        marginLeft: '10%'
    },
});