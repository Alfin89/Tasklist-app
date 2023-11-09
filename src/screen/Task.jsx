import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text style={{color:'black'}}>
                    Hallo Dunia
                </Text>
            </View>
        );
    }
}

const task = StyleSheet.create({

})

export default Task;