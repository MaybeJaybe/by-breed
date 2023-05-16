import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

function Item({ title, showDetails }) {
	return (
		<TouchableHighlight
			style={{ padding: 20 }}
			onPress={() => showDetails()}
			underlayColor='#ccc'
		>
			<Text
				style={{ fontSize: 20 }}
			>{title}</Text>
		</TouchableHighlight>
	)
}

export default Item