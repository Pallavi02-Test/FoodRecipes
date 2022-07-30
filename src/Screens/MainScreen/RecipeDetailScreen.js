import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import data from '../../data/db.json';
import YoutubePlayer from 'react-native-youtube-iframe';

let recipeId;

const RecipeScreen = ({ route }) => {

    recipeId = route.params.recipe_Id;
    const [recipeDetails, setRecipeDetails] = useState([]);

    useEffect(() => {
        setRecipeDetails(data.recipes);
    })


    console.log("Details : ", recipeDetails);
    return (
        <View>
            <YoutubePlayer
                height={300}
                play={false}
                videoId={'c-oVDb-O2Q8'}
            />


            <View>
                <Text>PANEER TIKKA BINA TANDOOR - Panner
                    Tikka is one of the most common food of choice at the
                    restaurant and this video breaks the recipe for you, so
                    that you can try this yummy, flavourful paneer dish at home.
                    Try it today!
                </Text>

            </View>
        </View>
    );

}

export default RecipeScreen;