import React, { Component, useState } from 'react';
import { SafeAreaView, Platform, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Alert } from 'react-native';
import params from './src/params'
import Field from './src/components/Field';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed,
} from './src/functions';

export default class App extends Component {

    constructor(props) {
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
        return {
            board: createMinedBoard(rows, cols, this.minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        }
    }

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board)
        openField(board, row, column)
        const lost = hadExplosion(board)
        const won = wonGame(board)

        if (lost) {
            showMines(board)
            Alert.alert('Perdeeeeeu!', 'Que burro!')
        }

        if (won) {
            Alert.alert('Parabéns', 'Você Venceu!')
        }

        this.setState({ board, lost, won })
    }

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board)
        invertFlag(board, row, column)
        const won = wonGame(board)
  
        if (won) {
            Alert.alert('Parabens', ' voce venceu! ')
        }

        this.setState({ board, won })
    }

    onLevelSelected = level => {
        params.difficultLevel = level
        this.setState(this.createState())
    }
    render() {
        return (

            <View style={styles.sectionContainer}>
                <LevelSelection isVisible={this.state.showLevelSelection} 
                onLevelSelected={this.onLevelSelected} 
                onCancel = {() => this.setState({ showLevelSelection: false})} />
                <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
                    onNewGame={() => this.setState(this.createState()) }
                    onFlagPress={() => this.setState({ showLevelSelection: true})}/>
                <View style={styles.board}>
                    <MineField board={this.state.board}
                        onOpenField={this.onOpenField}
                        onSelectField={this.onSelectField} />
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
