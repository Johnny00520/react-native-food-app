import axios from "axios";


export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization: "Bearer JK_Mntat6pTmkjah6uV5lksUGuHCCNd_3oayQsBe_nZZyIhLHw0Gq94lbfiXwuLDcK6eO0XdgrS5JWXirb2VN7zBeVlTf6dvd07VLNVBclrWltW5vscP18B7DkbAX3Yx"
	}
});
