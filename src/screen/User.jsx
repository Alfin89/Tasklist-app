import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color:"#0082f7"}}>Settings!</Text>
            </View>
        );
    }
}

const user = StyleSheet.create({

})

export default User;
