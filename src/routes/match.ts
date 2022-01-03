import axios from "axios";
import express, { Request, Response } from "express";
import { LIVE_MATCHES } from "../common/string";
const route = express();

route.get("/match/live", async (req: Request, res: Response) => {
    const {data:{result:{games}}} = await axios.get(LIVE_MATCHES)
    return res.send(games)
});

route.get("/match", (req: Request, res: Response) => {

});

route.get("/match/:id",(req: Request, res: Response) => {

})

export default route