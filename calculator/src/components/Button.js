import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/ 4, //Pega o tamanho da tela e divide por 4 para definir o tamanho do botao
        width: Dimensions.get('window').width/ 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor:'#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) *2,
    },
    buttonTripple: {
        width: (Dimensions.get('window').width / 4) *3,
    }

})

export default props => {
    const stylesButton = [styles.button]

    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTripple)
    if(props.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}