"use client";

import { useQuery } from "@apollo/client";
import FavoriteButton from "./FavoriteButton";
import { GET_RESOURCES } from "@/graphql/queries";
import RemoveButton from "./RemoveButton";
import { useState } from "react";

const categories = ["ALL", "TOOL", "COURSE", "DOCS", "VIDEO", "UIKIT"];

type Resource = {
	id: string;
	title: string;
	description: string;
	url: string;
};

export default function ResourceList() {
	const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
	const [showFavorites, setShowFavorites] = useState(false);

	const { data, loading, error } = useQuery(GET_RESOURCES, {
		variables: {
			category:
				selectedCategory === "ALL" ? null : (selectedCategory as string),
			isFavorite: showFavorites ? true : undefined,
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="space-y-4">
			<div className="flex flex-wrap gap-2">
				{categories.map((cat) => (
					<button
						key={cat}
						className={`btn btn-sm ${
							selectedCategory === cat ? "btn-primary" : "btn-outline"
						}`}
						onClick={() => setSelectedCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>
			<button
				className={`btn btn-sm ${
					showFavorites ? "btn-secondary" : "btn-outline"
				}`}
				onClick={() => setShowFavorites(!showFavorites)}
			>
				{showFavorites ? "☆ Show All" : "★ Show Favorites"}
			</button>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{data.resources.map((res: Resource) => (
					<div key={res.id} className="card bg-base-100 w-96 shadow-sm">
						<div className="card-body">
							<div className="flex justify-between items-center">
								<h2 className="card-title text-sm">{res.title}</h2>
								<RemoveButton id={res.id} />
							</div>
							<p className="text-sm overflow-y-auto h-12 mb-2">
								{res.description}
							</p>
							<span className="badge badge-primary badge-xs badge-soft badge-outline">
								{res.category}
							</span>
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
		</div>
	);
}
