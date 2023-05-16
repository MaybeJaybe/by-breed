import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Feature({ name, value }) {
	let stars = ''
	for (let i = 0; i < value; i += 1) {
		stars += '★'
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{name}</Text>
			<Text style={styles.value}>{stars}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		padding: 8,
	},
	name: {
		fontSize: 18,
	},
	value: {
		fontSize: 16,
		fontWeight: 'bold'
	}
})

export default Feature