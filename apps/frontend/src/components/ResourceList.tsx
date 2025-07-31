"use client";

import { gql, useQuery } from "@apollo/client";

const GET_RESOURCES = gql`
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

export default function ResourceList() {
	const { data, loading, error } = useQuery(GET_RESOURCES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<ul>
			{data.resources.map((res: any) => (
				<li key={res.id}>
					<a href={res.url}>{res.title}</a>
				</li>
			))}
		</ul>
	);
}
