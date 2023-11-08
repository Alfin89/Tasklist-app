import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';


const Navbar = () => {
    return (
        <View style={{ flexDirection:'row', backgroundColor:'#ffffff',paddingTop:10, elevation:3,paddingBottom:10,marginHorizontal:10,borderRadius:10,marginBottom:5 }}>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="home" size={25} color="#0082f7" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="add-circle" size={25} color="#bdbdbd" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
            <Icon name="person" size={25} color="#bdbdbd" />
            <Text style={{ fontSize:12, color:'#bdbdbd',fontWeight:'bold' }}>User</Text>
          </TouchableOpacity>
        </View> 
    );
}

export default Navbar;