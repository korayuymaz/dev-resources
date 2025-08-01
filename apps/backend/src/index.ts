import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { adminAuthPlugin } from "./adminAuthPlugin";

type ApolloContext = {
	isAdmin: boolean;
};
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [adminAuthPlugin],
	context: ({ req }): ApolloContext => {
		const userEmail = req.headers["x-user-email"];
		return {
			isAdmin: userEmail === process.env.ADMIN_EMAIL,
		};
	},
});

server.listen({ port: 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
