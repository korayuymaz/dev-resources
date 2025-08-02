"use client";

import { SessionProvider } from "next-auth/react";
import ApolloProviderWrapper from "@/components/ApolloWrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<ApolloProviderWrapper>{children}</ApolloProviderWrapper>
		</SessionProvider>
	);
}
