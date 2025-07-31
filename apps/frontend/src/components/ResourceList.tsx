"use client";

import { useQuery } from "@apollo/client";
import FavoriteButton from "./FavoriteButton";
import { GET_RESOURCES } from "@/graphql/queries";
import RemoveButton from "./RemoveButton";

export default function ResourceList() {
	const { data, loading, error } = useQuery(GET_RESOURCES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{data.resources.map((res: any) => (
				<div key={res.id} className="card bg-base-100 w-96 shadow-sm">
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title text-sm">{res.title}</h2>
							<RemoveButton id={res.id} />
						</div>
						<p className="text-sm">{res.description}</p>
						<div className="mt-2 card-actions justify-between items-center">
							<a
								href={res.url}
								target="_blank"
								className="btn btn-primary text-xs"
							>
								Go to Resource
							</a>
							<FavoriteButton id={res.id} isFavorite={res.isFavorite} />
						</div>
					</div>
				</div>
			))}
		</ul>
	);
}
