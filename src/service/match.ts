import _ from "underscore";
import { getLiveMatches } from "../model";
export const startGetLiveMatches = async () => {
  try {
    const {
      data: {
        result: { games },
      },
    } = await getLiveMatches();
    if (games.length) {
      const filtered = games.map((game: any) => _.omit(game, "abilities"));
      global.socket.emit("live-matches", { matchList: filtered });
    }
  } catch (error) {
    setTimeout(startGetLiveMatches, 1000);
  } finally {
    setTimeout(startGetLiveMatches, 1000);
  }
};
