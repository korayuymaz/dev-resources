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
		toggleFavorite: async (_: any, { id }: { id: string }) => {
			const resource = await prisma.resource.findUnique({
				where: { id: Number(id) },
			});

			if (!resource) throw new Error("Resource not found");

			return prisma.resource.update({
				where: { id: Number(id) },
				data: { isFavorite: !resource.isFavorite },
			});
		},
		deleteResource: async (_: any, { id }: { id: string }) => {
			const resource = await prisma.resource.findUnique({
				where: { id: Number(id) },
			});
			if (!resource) throw new Error("Resource not found");

			await prisma.resource.delete({ where: { id: Number(id) } });
			return { success: true, message: "Resource deleted successfully" };
		},
	},
};
