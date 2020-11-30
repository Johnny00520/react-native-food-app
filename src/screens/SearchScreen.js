import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from "../components/SearchBar";
import { createStackNavigator } from "@react-navigation/stack";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import ResultsShowScreen from "../screens/ResultsShowScreen";

const Stack = createStackNavigator();

const Search = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter(result => {
			return result.price === price;
		})
	}

	return (

		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					title="Cost Effective"
					results={filterResultsByPrice("$")}
				/>
				<ResultsList
					title="Bit Pricier"
					results={filterResultsByPrice("$$")}
				/>
				<ResultsList
					title="Big Spender"
					results={filterResultsByPrice("$$$")}
				/>
			</ScrollView>
		</>

	)
}

const SearchScreen = () => {
	
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Business Search"
				component={Search}
				options={{
					
				}}
			/>
			<Stack.Screen
				name="ResultsShow"
				component={ResultsShowScreen}
				options={({ route }) => ({
					headerTitle: `Product: Test`
				})}
			>

			</Stack.Screen>
		</Stack.Navigator>
		
	)
}

const styles = StyleSheet.create({});

export default SearchScreen;
