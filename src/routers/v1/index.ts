import express, { Router } from "express";

import authRouter from "./authRouter";
import userRouter from "./userRouter";

const v1Router: Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/users", userRouter);

export default v1Router;
