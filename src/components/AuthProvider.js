import React, { useState } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = React.createContext({
	// default values for Context
	user: null,
	login: () => {},
	logout: () => {},
});

const AuthProvider = ({
	children
}) => {
	// console.log("children: ", children)
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider 
			value={{
				user,
				login: () => {
					const fakeUser = { username: "Bob" }
					setUser(fakeUser)
					AsyncStorage.setItem("user", JSON.stringify(fakeUser))
				},
				logout: () => {
					setUser(null);
					AsyncStorage.removeItem("user")	
				}
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
