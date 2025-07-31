import { gql } from "@apollo/client";

export const TOGGLE_FAVORITE = gql`
	mutation ToggleFavorite($id: ID!) {
		toggleFavorite(id: $id) {
			id
			isFavorite
		}
	}
`;

export const CREATE_RESOURCE = gql`
	mutation CreateResource($data: NewResourceInput!) {
		createResource(data: $data) {
			id
			title
		}
	}
`;

export const DELETE_RESOURCE = gql`
	mutation DeleteResource($id: ID!) {
		deleteResource(id: $id) {
			success
			message
		}
	}
`;
