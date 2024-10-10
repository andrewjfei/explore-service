import express, { Router, Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";

const userRouter: Router = express.Router();

const prisma: PrismaClient = new PrismaClient();

userRouter.get("/", async (req: Request, res: Response) => {
	const users: User[] = await prisma.user.findMany({
		include: {
			lists: {
				include: {
					locations: true
				}
			}
		}
	});
	res.status(200).json(users);	
});

export default userRouter;
