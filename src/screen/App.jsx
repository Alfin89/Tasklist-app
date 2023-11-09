// import { Text, StyleSheet, View, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native'
// import React, { Component } from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Navbar from '../components/Navbar';
// import Menu from '../components/Menu';
// import Kolom from '../components/Kolom';
// import Home from './Home';


// export default class App extends Component {
//   render() {
//     return (
//       <View style={{ flex:1, backgroundColor:'#f4f4f4' ,}}>
//       <View style={{ flex:1 }}>
       {/* <Menu/> */}
       {/* <Kolom/> */}
      // </View>
       {/* <Navbar/> */}
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})

import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import User from './User'
import Task from './Task'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        // headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }} >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={30} color="#0082f7" />,
        }}
      />
      <Tab.Screen 
      name="Task" 
      component={Task} 
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: () => <Icon name="add-circle" size={55} color="#0082f7"/>
        }}
      />
      <Tab.Screen 
      name="User" 
      component={User} 
        options={{
          tabBarLabel: 'User',
          tabBarIcon: () => <Icon name="person" size={30} color="#0082f7"/>
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left : 16,
    right : 16,
    bottom: 18,
    height: 60,
    borderRadius: 16,
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
