import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
	query GetResources {
		resources {
			id
			title
			description
			url
			category
			isFavorite
		}
	}
`;
