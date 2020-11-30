import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Center from "./Center";
import { AuthContext } from './AuthProvider';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
	const { login } = useContext(AuthContext);
	return (
		<Center>
			<Text>I am Login screen</Text>
			<Button
				title="log me in"
				onPress={() => login()}
			/>
			<Button
				title="go to register"
				onPress={() => navigation.navigate("Register")}
			/>
		</Center>
	)
}
const Register = ({ navigation, route }) => {
	return (
		<Center>
			<Text>I am a register screen</Text>
			<Text>route name: {route.name}</Text>
			<Button 
				title="go to login"
				onPress={() => navigation.navigate("Login")}
				
			/>
		</Center>
	)
}
const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				header: () => null
			}}
		>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerTitle: "Sign in"
				}}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				options={{
					headerTitle: "Sign up",
					// header: () => null
				}}
			/>
		</Stack.Navigator>
	)
}

export default AuthStack;