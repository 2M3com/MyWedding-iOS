import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import WeddingListButton from 'src/components/WeddingListButton'

const WeddingList = (props) => {

  return (
    <View style={[props.style, styles.outerContainer]} >
      <Text style={styles.header}>List of weddings</Text>

      <FlatList
        data={ props.weddings }
        renderItem={ ({item}) => (<WeddingListButton {...item} />) }
        keyExtractor={ item => item.id }
      />

    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#E0E0E0'
  },

  header: {
    fontSize: 30
  },

  innerContainer: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#000000'
  }
})

export default WeddingList
