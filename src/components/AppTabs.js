import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import HomeStack from "./HomeStack";
import SearchScreen from "../screens/SearchScreen";


const Tabs = createBottomTabNavigator();



const AppTabs = () => {
	return (
		<Tabs.Navigator
			// initialRouteName="Search"
			screenOptions={({ route }) => ({
				// https://icons.expo.fyi/
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = 'home';
						return <AntDesign name={iconName} size={size} color={color} />;
					} else if (route.name === 'Search') {
						iconName = 'search';
						return <EvilIcons name={iconName} size={size} color={color} />;
					}
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tabs.Screen
				name="Home"
				component={HomeStack}
			/>
			<Tabs.Screen
				name="Search"
				// component={Search}
				component={SearchScreen}
			/>
		</Tabs.Navigator>
	)
}


const styles = StyleSheet.create({});
export default AppTabs;