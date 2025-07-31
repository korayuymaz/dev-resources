import "./globals.css";
import { ReactNode } from "react";
import { ApolloWrapper } from "@/components/ApolloWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ApolloWrapper>{children}</ApolloWrapper>
			</body>
		</html>
	);
}
