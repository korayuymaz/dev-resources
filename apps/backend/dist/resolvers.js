"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.resolvers = {
    Query: {
        resources: async (_, { category, isFavorite }) => {
            return prisma.resource.findMany({
                where: {
                    ...(category ? { category: category } : {}),
                    ...(typeof isFavorite === "boolean" ? { isFavorite } : {}),
                },
            });
        },
    },
    Mutation: {
        createResource: async (_, { data }) => {
            return await prisma.resource.create({ data });
        },
        toggleFavorite: async (_, { id }) => {
            const resource = await prisma.resource.findUnique({
                where: { id: Number(id) },
            });
            if (!resource)
                throw new Error("Resource not found");
            return prisma.resource.update({
                where: { id: Number(id) },
                data: { isFavorite: !resource.isFavorite },
            });
        },
        deleteResource: async (_, { id }) => {
            const resource = await prisma.resource.findUnique({
                where: { id: Number(id) },
            });
            if (!resource)
                throw new Error("Resource not found");
            await prisma.resource.delete({ where: { id: Number(id) } });
            return { success: true, message: "Resource deleted successfully" };
        },
    },
};
