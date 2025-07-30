import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
	Query: {
		resources: async () => {
			return await prisma.resource.findMany();
		},
	},
};
