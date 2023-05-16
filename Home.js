import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import Item from './Item';
import { cats, dogs } from './breeds';

function Home({ navigation }) {
  const [breeds, setBreeds] = useState('cats');
  const breedsList = breeds === 'cats' ? cats : dogs;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Dogs" onPress={() => setBreeds('dogs')} />
        <Button title="Cats" onPress={() => setBreeds('cats')} />
      </View>

      <FlatList
        data={breedsList}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item, index }) => {
          return (
            <Item 
              title={item.breed} 
              showDetails={() => navigation.navigate('Details', { item })}
            />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </View>
  )
}

export default Home