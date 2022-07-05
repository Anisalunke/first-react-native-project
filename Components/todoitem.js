import { StyleSheet, Text, View, Button, TextInput,ScrollView,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TodoItem ({ list, pressHandler }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(list.key)}>
            <Text style = {styles.item}>{list.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    },
});