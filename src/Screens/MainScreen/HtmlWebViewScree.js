import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import HeaderWithLogo from './HeaderWithLogo'
import { WebView } from 'react-native-webview';

const HTMLViewScreen = ({ route, navigation }) => {

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://hebbarskitchen.com/dry-gobi-manchurian-recipe/' }}
            />
        </View>
    );
}

export default HTMLViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})