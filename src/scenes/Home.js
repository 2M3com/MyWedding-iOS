import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import SceneContainer from 'src/components/SceneContainer'
import WeddingList from 'src/components/WeddingList'

const fakeWeddings = [
  { id: 1, title: 'La boda del año', engaged1: 'Aarón', engaged2: 'Pili', status: 'confirmed', timeLeft: '2 days left' },
  { id: 2, title: 'Por fin salimos del armario', engaged1: 'Gallo', engaged2: 'Jonay', status: 'confirmed', timeLeft: '3 weeks left' },
  { id: 3, title: 'Nos casamos!!', engaged1: 'Cristo', engaged2: 'Ma José', status: 'unknown', timeLeft: '2 months left' },
  { id: 4, title: 'No tienes excusa para faltar', engaged1: 'Rodri', engaged2: 'Sam', status: 'rejected', timeLeft: '5 months left' }
]

const Home = (props) => {
  return (
    <SceneContainer>
      <WeddingList weddings={ fakeWeddings } style={ styles.weddingList }/>
    </SceneContainer>
  )
}

const styles = StyleSheet.create({
  weddingList: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default Home
