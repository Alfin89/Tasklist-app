import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native'


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text:'',
         };
    }
    render() {
        return (
            <View>
               <Text style={{ color:'#000000' , marginHorizontal:20,marginTop:10,fontWeight:"bold"}}>Masukan Judul</Text>
               <View style={{ marginHorizontal:20,marginTop:2, borderRadius:10, backgroundColor:'grey'}}>
                <TextInput placeholder='Masukan Judul anda'/>
               </View>
               <Text style={{ color:'#000000' , marginHorizontal:20,marginTop:10,fontWeight:"bold"}}>Masukan Judul</Text> 
               <View style={{ marginHorizontal:20,marginVertical:5, borderRadius:10, backgroundColor:'grey' }}>
                <TextInput placeholder='Masukan Content Anda'/>
               </View> 
               <View style={{backgroundColor:"grey",marginHorizontal:20,height:50}}>
                <Text style={{ textAlign:'center',paddingVertical:10 }}>tambah</Text>
               </View>
            </View>
        );
    }
}

const task = StyleSheet.create({


})

export default Task;