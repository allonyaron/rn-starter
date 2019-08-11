import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const foods = [
    { name: 'Food #1' },
    { name: 'Food #2' },
    { name: 'Food #3' },
    { name: 'Food #4' },
    { name: 'Food #5' },
    { name: 'Food #6' },
    { name: 'Food #11' },
    { name: 'Food #12' },
    { name: 'Food #13' },
    { name: 'Food #14' },
    { name: 'Food #15' },
    { name: 'Food #21' },
    { name: 'Food #22' },
    { name: 'Food #23' },
    { name: 'Food #24' },
    { name: 'Food #25' },
    { name: 'Food #31' },
    { name: 'Food #32' },
    { name: 'Food #33' },
    { name: 'Food #34' },
    { name: 'Food #35' }
  ];
  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={foods}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
