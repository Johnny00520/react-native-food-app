import React, { useContext, useEffect, useState } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from 'react-native';
import Center from "./Center";
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './AuthProvider';
import AppTabs from './AppTabs';
import AuthStack from "./AuthStack";


const Routes = () => {
	const { user, login } = useContext(AuthContext);

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// Check if the user is logged in or not
		AsyncStorage.getItem("user")
			.then((userString) => {
				if(userString) {
					// decode it
					login();
				}
				setLoading(false);
			})
			.catch(err => {
				console.log('err: ', err)
				setLoading(false);
			})
	}, [])
	if(loading) {
		return (
			<Center>
				<ActivityIndicator size="large"/>
			</Center>
		)
	}

	return (
		<NavigationContainer>
			{user ? <AppTabs /> : <AuthStack />}
		</NavigationContainer>
	)
}

export default Routes;

