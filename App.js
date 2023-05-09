import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './Item';
import { cats, dogs } from './breeds';

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kav}
      >
        {/* <ScrollView> */}
        <StatusBar style="auto" />
        {/* <TextInput style={styles.search} placeholder="Search"/> */}
        <View style={styles.listContainer}>
          <FlatList 
            data={cats.filter(item => item.breed.includes(search))}
            keyExtractor={item => item.breed}
            renderItem={({item, index}) => {
              return <Item index={index} data={item}/>
            }}
          />
          {/* {cats.map(cat => <Item name={cat.breed} />)} */}
          {/* <Text style={styles.heading}>Hello</Text>
          <Text>Foo Bar</Text>
          <Text style={styles.small}>Small Print</Text> */}
          {/* <StatusBar style="auto" /> */}
        </View>
        <TextInput 
          style={styles.search} 
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  listContainer: {
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    color: 'tomato',
    fontWeight: 'bold',
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
  },
});
