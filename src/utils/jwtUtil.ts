import jwt from "jsonwebtoken";

function generate(payload: object): string {
    const token: string = jwt.sign(payload, process.env.SECRET || "secret");

    return token;
}

export { generate };
