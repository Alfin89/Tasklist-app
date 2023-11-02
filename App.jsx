import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'#f4f4f4' }}>
      <View style={{ flex:1, backgroundColor:'#0082f7',marginBottom:60,marginHorizontal:10, marginTop:10, borderRadius:5 }}>
        <View style={{ marginTop:10 }}>
          <Icon name="chevron-back" size={25} color="#ffffff" />
        </View>
        <View style={{ marginBottom:20 }}>
          <Text style={{ marginTop:40, marginLeft:50 }}>Trello app redesaign</Text>
          <Text style={{  marginLeft:50 }}>Design Team</Text>
        </View>
      </View>
        <View style={{ flexDirection:'row', backgroundColor:'#ffffff',paddingTop:10, elevation:3,paddingBottom:10 }}>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="home" size={25} color="#0082f7" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="add-circle" size={30} color="#bdbdbd" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="person" size={25} color="#bdbdbd" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>User</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})