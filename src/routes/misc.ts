import express, { Request, Response } from "express";
import { getTeamLogo } from "../utils/match";
const route = express();

route.get("/team/logo/:ugc_id", (req: Request, res: Response) => {
    return res.send("aw")
});

export default route