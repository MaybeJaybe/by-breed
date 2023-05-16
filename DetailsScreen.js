import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Feature from './Feature';

function DetailsScreen({ navigation, route }) {
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key !== 'breed')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Text style={{ fontSize: 30 }}>{item.breed}</Text>

      <FlatList 
        style={{ width: '100%' }}
            data={keys}
            renderItem={(key) => {
                return <Feature name={key.item} value={item[key.item]} />
            }}
            keyExtractor = {(item) => item}
          />
    </View>
  )
}

export default DetailsScreen