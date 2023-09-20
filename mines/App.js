import React, { Component, useState } from 'react';
import { SafeAreaView, Platform, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import params from './src/params'
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions';

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = this.createState()
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return Math.ceil(cols * rows * params.difficultLevel)
    }

    createState = () => {
        const cols = params.getColumnsAmount()
        const rows = params.getRowsAmount()
        return{
            board: createMinedBoard(rows, cols, this.minesAmount())
        }
    }

    render() {
        return (

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
                <Text style={styles.welcome}>Tamanho da grade:
                    {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
                <View style={styles.board}>
                    <MineField board={this.state.board} />
                </View>
            </View>

        );
    }
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
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA',
    }
});
