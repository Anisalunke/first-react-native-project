import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from './Components/header';
export default function App() {

  const [todos, setTodos] = useState([
    {text:'buy manga', key:'1'},
    {text: 'play some music', key: '2'},
    {text: 'watch some anime', key:'3'},
    {text:'play sitar', key:'4'},
  ]);


 
  

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
           <FlatList 
             data = {todos}
             renderItem = {({item}) => (
              <Text>{item.text}</Text>
             )}
           />
        </View>
      </View>

      
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

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  }
 

   

  
});
