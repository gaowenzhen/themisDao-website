import { ApolloClient, InMemoryCache } from "@apollo/client";
import { THE_GRAPH_URL } from "../App";

const client = () =>
	new ApolloClient({
		uri: THE_GRAPH_URL,
		cache: new InMemoryCache(),
	});

export default client;
