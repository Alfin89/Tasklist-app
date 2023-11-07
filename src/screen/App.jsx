import { Text, StyleSheet, View, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex:1, backgroundColor:'#f4f4f4' ,}}>
      <View style={{ flex:1 }}>
       <Menu/>
       <View style={{ width:400,height:670, backgroundColor:'#F1F1F1', borderRadius:10, marginLeft:10, marginTop:10 ,elevation:3}}>
         <View style={{ marginTop:30,marginHorizontal:10 }}>
           <Text style={{ fontSize:20, color:'#000000' }}>Need to do</Text>
           <View style={{ flexDirection:'row-reverse',marginTop:-25 }}>
           <TouchableOpacity>
             <Icon name="chevron-down-circle-outline" size={25} color="#bdbdbd" />
           </TouchableOpacity>
           </View>
           <View style={{ width:380,height:100, backgroundColor:'#F4F4F4', borderRadius:10,  marginTop:10,elevation:3}}>
             <View style={{ width:70,height:15, backgroundColor:'#DC3535', borderRadius:10,  marginTop:10,elevation:3, marginLeft:10}}></View>
             <Text style={{ color:'#000000',marginLeft:10 }}>TO DO RESEARCH</Text>
             <View style={{marginTop:25,marginLeft:7}}>
              <Icon name="time-outline" size={25} color="#bdbdbd" />
              <View>
                <Text>jjj</Text>
              </View>
             </View>
           </View>
         </View>
        </View>
      </View>
       <Navbar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})