import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const Kolom = () => {
    return (
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
             <Text style={{ color:'#000000',marginLeft:10 }}>To Do Research</Text>
             <View style={{marginTop:25,marginLeft:7,flexDirection:'row',}}>
              <Icon name="time-outline" size={30} color="#bdbdbd" />
                <Text style={{ color:'#000000', marginTop:8,fontWeight:"bold" }}>16 dec </Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'flex-end' }}>
                <Image source={require('../assets/image/img.jpeg' )} style={{ width:25,height:25,borderRadius:50 ,marginBottom:190, marginRight:20 }}/>
              </View>
           </View>
           <View style={{ width:380,height:100, backgroundColor:'#F4F4F4', borderRadius:10,  marginTop:20,elevation:3}}>
             <View style={{ width:70,height:15, backgroundColor:'#FF6C22', borderRadius:10,  marginTop:10,elevation:3, marginLeft:10}}></View>
             <Text style={{ color:'#000000',marginLeft:10 }}> Create Project</Text>
             <View style={{marginTop:25,marginLeft:7,flexDirection:'row',}}>
              <Icon name="time-outline" size={30} color="#bdbdbd" />
                <Text style={{ color:'#000000', marginTop:8,fontWeight:"bold" }}>16 dec </Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'flex-end' }}>
                <Image source={require('../assets/image/img.jpeg' )} style={{ width:25,height:25,borderRadius:50 ,marginBottom:190, marginRight:20 }}/>
              </View>
           </View>
           <View style={{ width:380,height:100, backgroundColor:'#F4F4F4', borderRadius:10,  marginTop:20,elevation:3}}>
             <View style={{ width:70,height:15, backgroundColor:'#FF9209', borderRadius:10,  marginTop:10,elevation:3, marginLeft:10}}></View>
             <Text style={{ color:'#000000',marginLeft:10, }}>Create  Prototypes</Text>
             <View style={{marginTop:25,marginLeft:7,flexDirection:'row',}}>
              <Icon name="time-outline" size={30} color="#bdbdbd" />
                <Text style={{ color:'#000000', marginTop:8, fontWeight:"bold" }}>16 dec </Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'flex-end' }}>
                <Image source={require('../assets/image/img.jpeg' )} style={{ width:25,height:25,borderRadius:50 ,marginBottom:190, marginRight:20 }}/>
              </View>
           </View>
           <View style={{ width:380,height:100, backgroundColor:'#F4F4F4', borderRadius:10,  marginTop:20,elevation:3}}>
             <View style={{ width:70,height:15, backgroundColor:'#005B41', borderRadius:10,  marginTop:10,elevation:3, marginLeft:10}}></View>
             <Text style={{ color:'#000000',marginLeft:10 }}>Create Desaign Concept</Text>
             <View style={{marginTop:25,marginLeft:7,flexDirection:'row',}}>
              <Icon name="time-outline" size={30} color="#bdbdbd" />
                <Text style={{ color:'#000000', marginTop:8,fontWeight:"bold" }}>16 dec </Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'flex-end' }}>
                <Image source={require('../assets/image/img.jpeg' )} style={{ width:25,height:25,borderRadius:50 ,marginBottom:190, marginRight:20 }}/>
              </View>
           </View>
           <View style={{ width:380,height:100, backgroundColor:'#F4F4F4', borderRadius:10,  marginTop:20,elevation:3}}>
             <View style={{ width:70,height:15, backgroundColor:'#008170', borderRadius:10,  marginTop:10,elevation:3, marginLeft:10}}></View>
             <Text style={{ color:'#000000',marginLeft:10 }}>Discus Concept With Team</Text>
             <View style={{marginTop:25,marginLeft:7,flexDirection:'row',}}>
              <Icon name="time-outline" size={30} color="#bdbdbd" />
                <Text style={{ color:'#000000', marginTop:8,fontWeight:"bold" }}>16 dec </Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'flex-end' }}>
                <Image source={require('../assets/image/img.jpeg' )} style={{ width:25,height:25,borderRadius:50 ,marginBottom:190, marginRight:20 }}/>
              </View>
           </View>
         </View>
        </View>
    );
}

export default Kolom;