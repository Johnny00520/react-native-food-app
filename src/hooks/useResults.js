import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("")

	const searchApi = async(searchTerm) => {
		console.log("call Search API")
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "denver"
				}
			});
			setResults(response.data.businesses)
		} catch (err) {
			console.log("err in SearchScreen: ", err)
			setErrorMessage("Something went wrong: ", e)
		}

	}

	useEffect(() => {
		searchApi("pasta")
	}, [])

	return [searchApi, results, errorMessage]
}