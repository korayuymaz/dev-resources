import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
	Query: {
		resources: async () => prisma.resource.findMany(),
	},
	Mutation: {
		createResource: async (_: any, { data }: any) => {
			return await prisma.resource.create({ data });
		},
	},
};
