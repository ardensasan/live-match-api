import axios from "axios";
import express, { Request, Response } from "express";
import { LIVE_MATCHES } from "../common/string";
const route = express();
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1326563",
  key: "2199e079bc9ad09b0c70",
  secret: "79a656fe956778d3ff25",
  cluster: "ap1",
  useTLS: true,
});
const getLiveMatches = () => {
  setInterval(async () => {
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
        };
      });
      pusher.trigger("match-channel", "get-live-matches", {
        matchList: newList,
      });
    }
  }, 5000);
};
getLiveMatches();
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
