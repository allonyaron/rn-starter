import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Allon';
  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen</Text>
      <Text style={styles.nameStyle}>Como Se llama {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
