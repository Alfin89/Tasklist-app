import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = () => {
    return (
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
    );
}

export default Menu;