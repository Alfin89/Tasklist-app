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
               <Text style={styles.judul}>Masukan Judul</Text>
               <View style={styles.TextInputJudul}>
                <TextInput placeholder='Masukan Judul anda'/>
               </View>
               <Text style={styles.TextJudul}>Masukan Judul</Text> 
               <View style={styles.TextInputContent}>
                <TextInput placeholder='Masukan Content Anda'/>
               </View> 
               <View style={styles.ButtonTambah}>
                <Text style={styles.TextTambah}>tambah</Text>
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    judul:{
        color:'#000000' , 
        marginHorizontal:20,
        marginTop:10,
        fontWeight:"bold"
    },
    TextInputJudul:{
        marginHorizontal:20,
        marginTop:2,
        borderRadius:10,
        backgroundColor:'grey'
    },
    TextJudul:{
        color:'#000000' , 
        marginHorizontal:20,
        marginTop:10,
        fontWeight:"bold"
    },
    TextInputContent:{
        marginHorizontal:20,
        marginVertical:5, 
        borderRadius:10, 
        backgroundColor:'grey'
    },
    ButtonTambah:{
        backgroundColor:"grey",
        marginHorizontal:20,
        height:50,
        marginTop:80,
    },
    TextTambah:{
        textAlign:'center',
        paddingVertical:1,
        fontSize:30

    },


});

export default Task;