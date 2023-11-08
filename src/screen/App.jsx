import { Text, StyleSheet, View, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Kolom from '../components/Kolom';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'#f4f4f4' ,}}>
      <View style={{ flex:1 }}>
       <Menu/>
       <Kolom/>
      </View>
       <Navbar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})