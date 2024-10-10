import Error from "./Error";
import { ErrorCode, HttpMethod } from "../enums";

class InvalidRequestBodyError implements Error {
    status: number;
    code: ErrorCode;
    message: string;

    constructor(method: HttpMethod, endpoint: string, properties: string[]) {
        this.status = 400;
        this.code = ErrorCode.INVALID_REQUEST_BODY;
        this.message = `invalid ${method} ${endpoint} request body provided - required properties { ${properties.join(", ")} }`;
    }
}

export default InvalidRequestBodyError;
