import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const handleClick = (id) => {
  Actions.wedding({id: id})
}


const WeddingListButton = (props) => {

  return (
    <TouchableOpacity
      onPress={ () => handleClick(props.id)}
      style={ [styles.button, styles[props.status]] }
      >
      <Text>{props.title}</Text>
      <Text>{props.timeLeft}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  button: {
    height: 60
  },

  unknown: {
    backgroundColor: '#C2C72C'
  },

  confirmed: {
    backgroundColor: '#2CC750'
  },

  rejected: {
    backgroundColor: '#C76A2C'
  }
})

export default WeddingListButton
