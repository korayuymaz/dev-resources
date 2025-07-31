import { useMutation } from "@apollo/client";
import { DELETE_RESOURCE } from "@/graphql/mutations";
import { useState } from "react";
import { GET_RESOURCES } from "@/graphql/queries";

export default function RemoveButton({ id }: { id: string }) {
	const [deleteResource] = useMutation(DELETE_RESOURCE, {
		refetchQueries: [GET_RESOURCES],
	});
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (id: string) => {
		setSelectedId(id);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedId(null);
	};

	const handleDelete = () => {
		if (selectedId) {
			deleteResource({ variables: { id: String(selectedId) } });
		}
		closeModal();
	};

	return (
		<>
			<button onClick={() => openModal(id)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					className="lucide lucide-trash-icon lucide-trash"
				>
					<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
					<path d="M3 6h18" />
					<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
				</svg>
			</button>
			{isModalOpen && (
				<dialog open className="modal">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Confirm Deletion</h3>
						<p className="py-4">
							Are you sure you want to delete this resource? This action cannot
							be undone.
						</p>
						<div className="modal-action">
							<button onClick={handleDelete} className="btn btn-error">
								Yes, Delete
							</button>
							<button onClick={closeModal} className="btn">
								Cancel
							</button>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
}
