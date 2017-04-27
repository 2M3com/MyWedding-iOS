import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class SceneContainer extends Component {

  // TODO: Define base styles here and add them to the context

  render = () => {
    return (
      <View style={ styles.container }>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0E0',
    marginTop: 64,
    flex: 1
  }
})

export default SceneContainer
