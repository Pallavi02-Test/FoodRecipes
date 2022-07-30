import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import data from '../../data/db.json';

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
            <Text>Recipe Screen</Text>
        </View>
    );

}

export default RecipeScreen;