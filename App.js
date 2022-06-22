import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ScrollView} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [people, setPeople] = useState([
    {name:'Aniruddha', key:'1'},
    {name:'Anurag', key:'2'},
    {name:'Aditya', key:'3'},
    {name:'Ajay',key:'4'},
    {name:'Anjali',key:'5'},
    {name:'Aryan', key:'6'},
    {name:'baburao', key:'7'},

  ]);
  

  return (
    <View style={styles.container}>
    <ScrollView>
      { people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{ item.name }</Text>
        </View>
      ))}
    </ScrollView>

      
    </View>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  item: {
    backgroundColor:'pink',
    marginTop:24,
    padding:30,
    fontSize:24,
  },

   

  
});
