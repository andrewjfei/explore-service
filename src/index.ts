import express, { Express } from "express";

import { winston } from "./clients";
import router from "./routers";
import { errorHandler } from "./handlers";

const app: Express = express();
const port = 3030;

app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => {
	winston.info(`listening on http://localhost:${port}`);
});
