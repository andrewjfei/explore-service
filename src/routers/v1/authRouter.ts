import express, { Router } from "express";
import { AuthController } from "../../controllers";

const authRouter: Router = express.Router();

authRouter.post("/", AuthController.authenticateUser);

export default authRouter;
