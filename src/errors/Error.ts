import { ErrorCode } from "../enums";

interface Error {
    status: number,
    code: ErrorCode,
    message: String
}

export default Error;
