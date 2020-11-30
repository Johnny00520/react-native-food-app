import React, { useContext, useEffect, useRef, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Button, FlatList, Text, TouchableOpacity } from "react-native";
import { AuthContext } from './AuthProvider';
import faker from "faker";
import Center from './Center';

const Stack = createStackNavigator();

const Feed = ({ navigation }) => {
	return (
		<Center>
			<Text>Feed</Text>
			<FlatList
				style={{
					width: "100%"
				}}
				keyExtractor={(product, idx) => product + idx}
				data={Array.from(Array(50), () => faker.commerce.product())}
				renderItem={({ item }) => {
					return <Button title={item} onPress={() => {
						navigation.navigate("Product", {
							name: item
						})
					}} />
				}}
			/>
		</Center>
	)
}

const Product = ({ route, navigation }) => {
	return (
		<Center>
			<Text>{route.params.name}</Text>
			<Button
				title="Edit this product"
				onPress={() => {
					navigation.navigate("EditProduct", {
						name: route.params.name
					})
				}}
			/>
		</Center>
	)
}

const apiCall = (x) => {
	return x;
}

const EditProduct = ({ route, navigation }) => {
	const [formState] = useState();
	const submit = useRef();
	// console.log("submit: ", submit)
	submit.current = () => {
		// api call with new form state
		apiCall(formState);
		navigation.goBack();
	}
	useEffect(() => {
		navigation.setParams({ submit });
	}, [])
	return (
		<Center>
			<Text>Edit {route.params.name}</Text>
		</Center>
	)
}

const HomeStack = () => {
	const { logout } = useContext(AuthContext);

	return (
		<Stack.Navigator>
			
			<Stack.Screen
				name="feed"
				component={Feed}
				options={{
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => logout()}
							>
								<Text>
									LOGOUT
								</Text>
							</TouchableOpacity>
						)
					}
				}}
			/>
			<Stack.Screen
				name="Product"
				component={Product}
				options={({ route }) => ({
					headerTitle: `Product: ${route.params.name}`
				})}
			/>
			<Stack.Screen
				name="EditProduct"
				component={EditProduct}
				options={({ route }) => ({
					headerTitle: `Edit: ${route.params.name}`,
					headerRight: () => (
						<TouchableOpacity
							style={{ paddingRight: 8 }}
							onPress={() => {
								route.params.submit && route.params.submit.current();
							}}
						>
							<Text
								style={{
									color: "blue"
								}}
							>Done</Text>
						</TouchableOpacity>
					)
				})}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack;