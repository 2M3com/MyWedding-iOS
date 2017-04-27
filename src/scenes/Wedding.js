import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Actions } from 'react-native-router-flux'

import SceneContainer from 'src/components/SceneContainer'

const Wedding = (props) => {
  return (
    <SceneContainer>
      <Text onPress={Actions.home}>This is Wedding {props.id}!</Text>
    </SceneContainer>
  )
}

export default Wedding
