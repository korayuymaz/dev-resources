"use client";

import AuthButtons from "@/components/AuthButtons";
import AddResourceForm from "@/components/AddResourceForm";
import { SessionProvider } from "next-auth/react";

export default function AdminPage() {
	return (
		<SessionProvider>
			<AuthButtons />
			<AddResourceForm />
		</SessionProvider>
	);
}
