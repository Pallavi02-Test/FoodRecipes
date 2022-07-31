import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

let recipeId;

const RecipeScreen = ({ route }) => {

    // recipeId = route.params.recipe_Id;
    // const [recipeDetails, setRecipeDetails] = useState(route.params.recipe_item);
    // const [FilterData, setFilterData] = useState([]);

    // const [title, setTitle] = useState('');
    // const [details, setDetails] = useState('');
    // const [video, setVideo] = useState('');

    // useEffect(() => {
    //     findId(recipeDetails, recipeId);
    // });

    // const findId = (data, idToLookFor) => {
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i].id == idToLookFor) {
    //             setTitle(data[i].title);
    //             setDetails(data[i].details);
    //             setVideo(data[i].video);
    //         }
    //     }
    // }

    const {recipe_item } = route.params

    return (
        <View style={styles.container} >
            <View style={{ marginTop: '20%', alignItems: 'center' }}>
                <Text style={{ fontSize: RFValue(20), color: 'brown', fontWeight: 'bold' }}>{recipe_item.title}</Text>
            </View>
            <View style={{ height: '30%', marginTop: '20%' }}>
                <YoutubePlayer
                    height={RFValue(300)}
                    play={false}
                    videoId={recipe_item.video}
                />
            </View>

            <View style={{ marginTop: '20%', alignItems: 'center' }}>
                <Text style={{ fontSize: RFValue(14), color: 'brown', fontWeight: 'bold', textAlign: 'center' }}>{recipe_item.details}</Text>
            </View>



        </View>
    );

}

export default RecipeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(237,239,180,0.8)',
    },

})