import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Header extends Component {
  render(){
    return(
      <View style={styles.header}>
        <Text style={styles.text1}>Tugas 3 React Native</Text>
        <Text style={styles.text2}>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#9BAB4E",
    padding: 20
  },
  text1: {
    color: "white",
    textAlign: "center"
  },
  text2: {
    color: "#9834AB",
    textAlign: "center",
    fontSize: 22
  }
})

export default Header;
