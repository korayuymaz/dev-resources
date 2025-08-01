import type { Session } from "next-auth";

export type ApolloContext = {
	isAdmin: boolean;
	session?: Session | null;
};
