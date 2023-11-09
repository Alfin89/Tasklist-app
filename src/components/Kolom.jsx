import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const data = [
  {
    key: '1', 
    title: 'To Do Research',
    color: '#DC3535',
    time: 'Desember',
    image: ''
  },
  {
    key: '2', 
    title: 'Create Project',
    color: '#FF6C22',
    time: 'Desember',
    image: ''
  },
  {
    key: '3', 
    title: 'Create Prototypes',
    color: '#FF9209',
    time: 'Desember',
    image: ''
  },
  {
    key: '4', 
    title: 'Create Design Concept',
    color: '#005B41',
    time: 'Desember',
    image: ''
  },
  {
    key: '5', 
    title: 'Discuss Concept With Team',
    color: '#008170',
    time: 'Desember',
    image: ''
  },
  {
    key: '6', 
    title: 'Discuss Concept With Team',
    color: '#008170',
    time: 'Desember',
    image: ''
  },
];

const Item = ({ title, color, time }) => (
  <View style={[styles.item, { backgroundColor: '#ffffff', width: screenWidth - 20, margin: 10 }]}>
    <Text style={styles.itemText}>{title}</Text>
    <View style={styles.ViewIcon}>
      <Icon style={styles.Icontime} name="time-outline" size={20} color="#bdbdbd" />
      <Text style={{color : '#000000', position: 'absolute', bottom : -35, left: 33,}}>{time}</Text>
    </View>
  </View>
);

const YourComponent = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item title={item.title} color={item.color} time={item.time} />
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'center',
  },
  itemText: {
    color: '#000000',
    fontSize: 16,
    marginLeft : 10,
  },
  ViewIcon: {
    flexDirection: 'row', 
    position : 'relative',
    alignItems: 'center',
  },
  Icontime: {
    marginLeft: 10,
    position : 'absolute',
    bottom : -35,
  },
});

export default YourComponent;
