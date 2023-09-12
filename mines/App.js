import React, { Component } from 'react';
import { SafeAreaView, Platform, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field';


function App() {

    return (

        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
            <Text style={styles.welcome}>Tamanho da grade:
                {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>

            <Field />
            <Field opened />
            <Field opened nearMines={1} />
            <Field opened nearMines={2} />
            <Field opened nearMines={3} />
            <Field opened nearMines={4} />
            <Field opened nearMines={5} />
            <Field opened nearMines={6} />
            <Field mined />
            <Field mined opened />
            <Field mined opened exploded />
        </View>

    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        marginTop: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',

    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
