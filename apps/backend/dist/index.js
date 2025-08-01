"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const adminAuthPlugin_1 = require("./adminAuthPlugin");
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    plugins: [adminAuthPlugin_1.adminAuthPlugin],
    context: ({ req }) => {
        const userEmail = req.headers["x-user-email"];
        return {
            isAdmin: userEmail === process.env.ADMIN_EMAIL,
        };
    },
});
server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
