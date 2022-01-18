import express, { Request, Response } from "express";
import { getLiveMatchesController } from "./controller";
const route = express();

route.get("/match/live", getLiveMatchesController);

route.get("/match", (req: Request, res: Response) => {});

route.get("/match/:id", (req: Request, res: Response) => {});

export default route;