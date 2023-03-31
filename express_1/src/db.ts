// Import the `PrismaClient` class from the `@prisma/client` package
import { PrismaClient } from "@prisma/client";

// Create a new instance of the `PrismaClient` class
const prisma = new PrismaClient;

// Export the `prisma` instance to be used in other files
export default prisma;
