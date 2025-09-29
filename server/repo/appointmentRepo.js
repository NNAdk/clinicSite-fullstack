import { prisma } from "../prisma/prismaClient.js";


export const createRecord = async (data) => {
    return await prisma.appointments.create({
        data,
    });
};

export const getRecords = async () => {
    return await prisma.appointments.findMany({
        orderBy: {created_at: 'desc'}
    });
};