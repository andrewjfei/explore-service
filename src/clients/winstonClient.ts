import { createLogger, format, transports, Logger } from "winston";

const winston: Logger = createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: { service: "explore-service" },
    transports: [
        new transports.Console({ format: format.json() })
    ]
});

export default winston;
