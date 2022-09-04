import React from "react";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { Easing } from 'react-native';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 200,
        damping: 100,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.00,
        restSpeedThreshold: 0.00,
    },
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 100,
        easing: Easing.linear
    }
}

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='WelcomeScreen'
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                    open: config,
                    close: closeConfig
                }
            }}
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    title: 'WelcomeScreen',
                    headerShown: false,
                    headerTintColor: '#000000',
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            />
            
        </Stack.Navigator>

    );
}

export { StackNavigator };