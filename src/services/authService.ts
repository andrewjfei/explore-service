import { User } from "@prisma/client";
import { UserRepository } from "../repositories";
import { InvalidCredentialsError } from "../errors";
import { JwtUtil } from "../utils";

async function authenticateUser(
    username: string,
    password: string,
): Promise<string> {
    const user: User | null =
        await UserRepository.retrieveUserByUsername(username);

    if (!user || password !== user.password) {
        throw new InvalidCredentialsError("invalid auth credentials provided");
    }

    const jwt: string = JwtUtil.generate(user);

    return jwt;
}

export { authenticateUser };
