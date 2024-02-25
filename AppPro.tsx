import React from 'react'

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme,

} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style = {isDarkMode ? styles.darkcontainer : styles.whitecontainer}>
            <Text style = {isDarkMode ? styles.whiteText : styles.darkText}>
                Hello !
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    whitecontainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkcontainer: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
})

export default AppPro;