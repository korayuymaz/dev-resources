"use client";

import { useSession } from "next-auth/react";
import AddResourceForm from "./AddResourceForm";

export default function AddResourceFormWrapper() {
	const { data: session } = useSession();

	if (!session || session.user?.email !== "korayuymaz@gmail.com") {
		return null;
	}

	return <AddResourceForm />;
}
