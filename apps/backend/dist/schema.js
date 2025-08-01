"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
	enum Category {
		TOOL
		COURSE
		DOCS
		VIDEO
		UIKIT
	}

	type Resource {
		id: ID!
		title: String!
		description: String!
		url: String!
		category: Category!
		isFavorite: Boolean!
	}

	type Query {
		resources(category: Category, isFavorite: Boolean): [Resource!]!
	}

	input NewResourceInput {
		title: String!
		description: String!
		url: String!
		category: Category!
	}

	type DeleteResourceResponse {
		success: Boolean!
		message: String
	}

	type Mutation {
		createResource(data: NewResourceInput!): Resource!
		toggleFavorite(id: ID!): Resource!
		deleteResource(id: ID!): DeleteResourceResponse!
	}
`;
