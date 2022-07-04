import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [people, setPeople] = useState([
    {name:'Aniruddha', id:'1'},
    {name:'Anurag', id:'2'},
    {name:'Aditya', id:'3'},
    {name:'Ajay', id:'4'},
    {name:'Anjali', id:'5'},
    {name:'Aryan', id:'6'},
    {name:'baburao', id:'7'},

  ]);

  const presshandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    });
  }
  

  return (
    <View style={styles.container}>
      <FlatList 
       keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => presshandler(item.id)}>
             <Text style={styles.item}>{ item.name }</Text>
          </TouchableOpacity>
          
        )}
      />
    {/* <ScrollView>
      { people.map(item => (
        <View key={item.key}>
          <Text style={styles.item}>{ item.name }</Text>
        </View>
      ))}
    </ScrollView> */}

      
    </View>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    backgroundColor:'pink',
    marginTop:24,
    padding:30,
    fontSize:24,
  },

   

  
});
