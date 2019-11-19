import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from './utils/Color';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

const headerTitle = 'To-do App';

export default function Main() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      style={{
        backgroundColor: '#f18a69'
      }}>
      {/* <LinearGradient colors={primaryGradientArray} style={styles.container}> */}
      <StatusBar barStyle='light-content' />
      <View style={styles.centered}>
        <Header title={headerTitle} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={inputValue}
          onChangeText={value => setInputValue(value)}
        />
      </View>
      <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.scrollableList}>
          {/* {Object.values(allItems)
            .reverse()
            .map(item => (
              <List
                key={item.id}
                {...item}
                deleteItem={deleteItem}
                completeItem={completeItem}
                incompleteItem={incompleteItem}
              />
            ))} */}
        </ScrollView>
      </View>

      {/* </LinearGradient> */}
    </div>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000'
  },
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15
  }
});
