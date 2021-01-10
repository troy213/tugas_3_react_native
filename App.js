import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import Barang from './Component/Barang';
import Header from './Component/Header';

class App extends Component {
  render(){
    return(
      <>
        <StatusBar backgroundColor="gray" />
        <View style={{flex:1}}>
          <Header data="SELAMAT DATANG" />
          <Barang />
        </View>
      </>
    );
  }
}

export default App;
