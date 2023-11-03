import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'#f4f4f4' }}>
      <View style={{ flex:1 }}>
        <View style={{ backgroundColor:"#0082f7" }}>
          <StatusBar barStyle='dark-content' backgroundColor={'#0082f7'}/>
          <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={{ justifyContent:'center' , marginTop:50,marginLeft:10}}>
          <Icon name="chevron-back-outline" size={45} color="#bdbdbd" />
          </TouchableOpacity>
          <Text style={{ justifyContent:'center',alignItems:'center', marginTop:60, color:'#bdbdbd',fontSize:20, flex:1}}>Trello App</Text>
          <TouchableOpacity style={{ marginRight:10 }}>
            <Icon name="search-outline" size={35} color="#bdbdbd" marginTop={57} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight:10 }}>
            <Icon name="notifications-outline" size={35} color="#bdbdbd" marginTop={57} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight:10 }}>
            <Icon name="ellipsis-vertical-outline" size={30} color="#bdbdbd" marginTop={57} />
          </TouchableOpacity>
          </View>
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