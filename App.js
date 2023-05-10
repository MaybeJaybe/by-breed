import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TextInput, Text, KeyboardAvoidingView, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Item from './Item';
import { cats, dogs } from './breeds';

// function Cats() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', jusitfyContent: 'center', }}>
//       <Text>Cats</Text>
//       <Button title="See Dogs" onPress={() => navigation.navigate('Dogs')} />
//     </View>
//   );
// }
// function Dogs() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', jusitfyContent: 'center', }}>
//       <Text>Dogs</Text>
//       <Button title="See Cats" onPress={() => navigation.navigate('Cats')} />
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  const [search, setSearch] = useState('');
  const [breeds, setBreeds] = useState('cats');
  const [active, setActive] = useState();
  const breedsList = breeds === 'cats' ? cats : dogs;
  // state = {
  //   activeButton: 1
  // }
  const handleCatPress = (e) => {
    setBreeds('cats');
    setActive(e.target.id)
  }
  const handleDogPress = (e) => {
    setBreeds('dogs');
    setActive(e.target.id)
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kav}
      >
        <Text style={styles.heading}>Breed Dataset</Text>
        {/* i like search bar better on top */}
        <View>
          <TextInput 
            style={styles.search} 
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
        </View>
        {/* <ScrollView> */}
        <StatusBar style="auto" />
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="Cats">
            <Stack.Screen name="Cats" component={Cats} />
            <Stack.Screen name="Dogs" component={Dogs} />
          </Stack.Navigator>
        </NavigationContainer> */}
        {/* () => setBreeds('dogs') */}
        <View style={styles.buttons}>
          <Button onPress={handleCatPress} title='Cats' style={styles.active === '1' ? 'active' : undefined}/>
          <Button onPress={handleDogPress} title='Dogs' style={styles.active === '2' ? 'active' : undefined}/>
        </View>
        <View style={styles.listContainer}>
          {/* <Text style={styles.heading}>Breed Dataset</Text> */}
          <FlatList 
            data={breedsList.filter(item => item.breed.includes(search))}
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
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 50,
  },
  kav: {
    flex: 1,
    // justifyContent: 'center',
    width: '100%',
    marginBottom: 150,
  },
  listContainer: {
    width: '100%'
  },
  heading: {
    fontSize: 50,
    color: '#42bff5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  search: {
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  active: {
    backgroundColor: '#42bff5',
  }
});
