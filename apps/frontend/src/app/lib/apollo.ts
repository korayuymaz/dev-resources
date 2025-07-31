import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://localhost:4000", // backend URL (Vercel'de değişecek)
	cache: new InMemoryCache(),
});
