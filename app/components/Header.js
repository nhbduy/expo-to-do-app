import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40
  },
  headerText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '500'
  }
});
