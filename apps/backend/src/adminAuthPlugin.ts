import type { GraphQLRequestContextDidResolveOperation } from "apollo-server-plugin-base";
import type { ApolloContext } from "./types";

export const adminAuthPlugin = {
	async requestDidStart() {
		return {
			async didResolveOperation(
				ctx: GraphQLRequestContextDidResolveOperation<ApolloContext>
			) {
				const { request } = ctx;
				const contextValue =
					(ctx as any).contextValue ??
					(ctx as any).context?.contextValue ??
					(ctx as any).context;

				// Sadece mutation'larda kontrol yap
				if (request.query && request.query.includes("mutation")) {
					if (!contextValue.isAdmin) {
						throw new Error("Unauthorized");
					}
				}
			},
		};
	},
};
