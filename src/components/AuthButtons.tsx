"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
	const { data: session } = useSession();

	if (!session) {
		return (
			<button className="btn btn-primary" onClick={() => signIn("google")}>
				Sign in with Google
			</button>
		);
	}

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm">Hi, {session.user?.name}</span>
			<button className="btn btn-outline btn-sm" onClick={() => signOut()}>
				Sign Out
			</button>
		</div>
	);
}
