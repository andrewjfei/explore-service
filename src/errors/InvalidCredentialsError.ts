import { ErrorCode } from "../enums";
import Error from "./Error";

class InvalidCredentialsError implements Error {
    status: number;
    code: ErrorCode;
    message: string;

    constructor(message: string = "invalid crendentials provided") {
        this.status = 401;
        this.code = ErrorCode.INVALID_CREDENTIALS;
        this.message = message;
    }
}

export default InvalidCredentialsError;
