import { gql } from "@apollo/client";

export const GET_RESOURCES = gql`
	query GetResources($category: Category, $isFavorite: Boolean) {
		resources(category: $category, isFavorite: $isFavorite) {
			id
			title
			description
			url
			category
			isFavorite
		}
	}
`;
