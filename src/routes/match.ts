import axios from "axios";
import express, { Request, Response } from "express";
import { LIVE_MATCHES } from "../common/string";
const route = express();

route.get("/match/live", async (req: Request, res: Response) => {
  const {
    data: {
      result: { games },
    },
  } = await axios.get(LIVE_MATCHES);
  if (games) {
    const newList = games.map((game: any) => {
      return {
        lobby_id: game.lobby_id,
        match_id: game.match_id,
        league_id: game.league_id,
        duration: game.scoreboard?.duration || 0,
        radiant_team: game.radiant_team,
        dire_team: game.dire_team,
        radiant_series_wins: game.radiant_series_wins,
        dire_series_wins: game.dire_series_wins,
        radiant_score: game.scoreboard?.radiant?.score,
        dire_score: game.scoreboard?.dire?.score,
        // dire_score: game.scoreboard.dire.score|| undefined,
      };
    });
    return res.send(newList);
  }else{
    return res.send("a");
  }

});

route.get("/match", (req: Request, res: Response) => {});

route.get("/match/:id", (req: Request, res: Response) => {});

export default route;
