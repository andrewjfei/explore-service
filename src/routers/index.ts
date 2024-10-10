import express, { Router, Request, Response } from "express";
import v1Router from "./v1";

const router: Router = express.Router();

router.get("/status", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ONLINE" });
});

router.use("/v1", v1Router);

export default router;
