import axios from "axios";
import express, { Request, Response } from "express";
import { getTeamLogo } from "../utils/match";
const route = express();

route.get("/team/", (req: Request, res: Response) => {});

route.get("/team/logo/:ugc_id", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(
      `https://api.steampowered.com/ISteamRemoteStorage/GetUGCFileDetails/v1/?key=5B94DAD2545FCAA73447EEF18ED8432A&appid=570&ugcid=${req.params.ugc_id}`
    );
    return res.send(data);
  } catch (error) {
    return res.send();
  }
});

export default route;
