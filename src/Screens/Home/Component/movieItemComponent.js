import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';
import Dialog from '../../../Components/Dialog';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieItemComponent = (props) => {
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [poster, setPoster] = useState('');
    const [movieName, setMovieName] = useState('');
    const [year, setYear] = useState('');
    const [imdb, setImdb] = useState('');

    const showModal = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Dialog visible={visibleDialog}>
                    <MaterialCommunityIcons
                        name="close-circle"
                        color={'black'}
                        style={{
                            position: 'relative',
                            left: 250,
                            right: 0,
                            top: -12,
                            bottom: 6,
                        }}
                        size={25}
                        onPress={() => {
                            setVisibleDialog(false)
                        }}
                    />
                    <Image
                        source={{ uri: poster }}
                        style={{
                            width: '100%',
                            height: '60%',
                        }}
                    />
                    <Text style={{ color: 'black', paddingVertical: 10, fontSize: 10 }}>IMDBID : {imdb}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 28, paddingVertical: 20 }}>{movieName}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 28, paddingVertical: 15 }}>Year : {year}</Text>
                    <View
                        style={{
                            alignItems: 'flex-end',
                            marginTop: 6,
                            borderColor: 'green',
                        }}>
                    </View>
                </Dialog>
            </View>
        );
    }

    const _onPress = () => {
        props.onPressItem();
        setVisibleDialog(true);
        setPoster(props.item.Poster == "N/A" ? 'https://townsquare.media/site/442/files/2017/02/Batman-Movie-Ranking.jpg' : props.item.Poster);
        setMovieName(props.item.Title);
        setYear(props.item.Year);
        setImdb(props.item.imdbID)
    };

    return (
        <View style={{ margin: 6 }}>
            {showModal()}
            <TouchableOpacity
                onPress={() => {
                    _onPress()
                }}
            >
                <Card style={[styles.sectionContainer]} >
                    <Image
                        style={styles.image}
                        source={{ uri: props.poster == "N/A" ? 'https://townsquare.media/site/442/files/2017/02/Batman-Movie-Ranking.jpg' : props.poster }}     //{icons.person}
                    />
                </Card>
            </TouchableOpacity>
            <View style={{ paddinBottom: 50 }}></View>
        </View>
    )

}

export default MovieItemComponent;

const styles = StyleSheet.create({
    sectionContainer: {
        width: 350,
        height: 300,
        borderRadius: 10,
        borderColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: 350,
        height: 300,
        borderRadius: 10,
    },
});