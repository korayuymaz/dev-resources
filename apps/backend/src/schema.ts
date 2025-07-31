import { gql } from "apollo-server";

export const typeDefs = gql`
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
		resources: [Resource!]!
	}

	input NewResourceInput {
		title: String!
		description: String!
		url: String!
		category: Category!
	}

	type Mutation {
		createResource(data: NewResourceInput!): Resource!
	}
`;
