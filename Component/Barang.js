import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Barang extends Component {
  constructor(props){
    super(props);
    this.state = {
      jumlah: 0
    }
  }

  onPressPlus = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    });
  };

  onPressMin = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1
      });
    } else {
      alert("Jumlah Tidak Boleh Kurang Dari 0");
    }
  };

  render(){
    return(
      <View>
        <Text style={styles.text2}>Jumlah: {this.state.jumlah}</Text>
        <Text style={styles.text}>Silahkan Tekan Tombol Di Bawah</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonPlus}
            onPress={this.onPressPlus}
          >
            <Text style={{color: "white"}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMin}
            onPress={this.onPressMin}
          >
            <Text style={{color: "white"}}>-</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>{this.state.jumlah}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row"
  },
  buttonPlus: {
    backgroundColor: "green",
    width: 100,
    alignItems: "center",
    padding: 10
  },
  buttonMin: {
    backgroundColor: "red",
    width: 100,
    alignItems: "center",
    padding: 10
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    padding: 20
  },
  text2: {
    textAlign: "right",
    paddingRight: 15
  },
  result: {
    textAlign: "center",
    fontSize: 50,
    color: "#1300A7",
    padding: 50
  }
})

export default Barang;
