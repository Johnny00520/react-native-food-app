import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({
	result,
}) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.imageStyle}
				source={{ uri: result.image_url }}
			/>
			<Text style={styles.name}>{result.name}</Text>
			<Text style={styles.name}>{result.rating} Stars, {result.review_count}</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		marginLeft: 15
	},
	imageStyle: {
		width: 250,
		borderRadius: 4,
		height: 120,
		marginBottom: 5,
	},
	name: {
		fontWeight: "bold",
		fontSize: 16
	}
});

export default ResultsDetail;