import { User } from "@prisma/client";

import { prisma } from "../clients";

async function retrieveAllUsers(): Promise<User[]> {
    const users: User[] = await prisma.user.findMany();

    return users;
}

async function retrieveUserByUsername(username: string): Promise<User | null> {
    const user: User | null = await prisma.user.findUnique({
        where: { username }
    });

    return user;
}

export { retrieveAllUsers, retrieveUserByUsername };
