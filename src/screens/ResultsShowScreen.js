import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
	const [result, setResult] = useState(null);

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`)
		setResult(response.data)
	}
	useEffect(() => {
		getResult(route.params.id)
	}, [])
	if(!result) {
		return null;
	}
	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => <Image style={styles.image} source={{ uri: item}}/>}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
	}
});
export default ResultsShowScreen;
