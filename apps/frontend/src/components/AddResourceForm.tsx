"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

type FormData = {
	title: string;
	description: string;
	url: string;
	category: "TOOL" | "COURSE" | "DOCS" | "VIDEO" | "UIKIT";
};

const CREATE_RESOURCE = gql`
	mutation CreateResource($data: NewResourceInput!) {
		createResource(data: $data) {
			id
			title
		}
	}
`;

export default function AddResourceForm() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		description: "",
		url: "",
		category: "TOOL",
	});

	const [createResource, { loading, error }] = useMutation(CREATE_RESOURCE, {
		onCompleted: () => {
			alert("Resource added successfully!");
			setFormData({ title: "", description: "", url: "", category: "TOOL" });
		},
		onError: (err) => {
			console.error("Mutation Error:", err);
		},
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		createResource({ variables: { data: formData } });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-xl mx-auto p-4 space-y-4 bg-base-100 rounded-lg shadow-md"
		>
			<h2 className="text-xl font-bold">Add a New Resource</h2>

			<input
				type="text"
				name="title"
				placeholder="Title"
				className="input input-bordered w-full"
				value={formData.title}
				onChange={handleChange}
				required
			/>

			<textarea
				name="description"
				placeholder="Description"
				className="textarea textarea-bordered w-full"
				value={formData.description}
				onChange={handleChange}
				required
			/>

			<input
				type="url"
				name="url"
				placeholder="https://example.com"
				className="input input-bordered w-full"
				value={formData.url}
				onChange={handleChange}
				required
			/>

			<select
				name="category"
				className="select select-bordered w-full"
				value={formData.category}
				onChange={handleChange}
			>
				<option value="TOOL">Tool</option>
				<option value="COURSE">Course</option>
				<option value="DOCS">Docs</option>
				<option value="VIDEO">Video</option>
				<option value="UIKIT">UI Kit</option>
			</select>

			<button
				type="submit"
				className="btn btn-primary w-full"
				disabled={loading}
			>
				{loading ? "Adding..." : "Add Resource"}
			</button>

			{error && <p className="text-error">Error: {error.message}</p>}
		</form>
	);
}
