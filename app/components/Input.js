import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { inputPlaceholder } from '../utils/Color';

export default function Input({ value, onChangeText, onDoneAddItem }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder='What will you do?'
      placeholderTextColor={inputPlaceholder}
      multiline={true}
      autoCapitalize='sentences'
      underlineColorAndroid='transparent'
      selectionColor={'black'}
      maxLength={50}
      returnKeyType='done'
      autoCorrect={false}
      blurOnSubmit={true}
      onSubmitEditing={onDoneAddItem}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500'
  }
});
