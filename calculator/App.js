import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

export default () => {
  state={
    displayValue: '0'
  }
return(
    <View style={style.container}>
      <Display value={this.state.displayValue} />
      <View style={style.buttons}>
          <Button label='AC' />
          <Button label='/' />
          <Button label='7' />
          <Button label='8' />
          <Button label='9' />
          <Button label='*' />
          <Button label='4' />
          <Button label='5' />
          <Button label='6' />
          <Button label='-' />
          <Button label='1' />
          <Button label='2' />
          <Button label='3' />
          <Button label='+' />
          <Button label='0' />
          <Button label='.' />
          <Button label='=' />
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 22,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
