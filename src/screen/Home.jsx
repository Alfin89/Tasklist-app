import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Kolom from '../components/Kolom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Kolom />
            </View>
        );
    }
}

const home = StyleSheet.create({

})

export default Home;