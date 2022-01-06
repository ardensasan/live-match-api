import express, { Request, Response } from "express";
const route = express();

route.get("/team/logo/:ugc_id", (req: Request, res: Response) => {
    return res.send("aw")
});

export default route