import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient({
    log: ['query', 'error'],
    // debug: true,
});


export default prisma;