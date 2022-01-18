import { Request, Response } from "express";
import { getLiveMatches } from "./model";

export const getLiveMatchesController = async (req: Request, res: Response) => {
  const {data} = await getLiveMatches();
  return res.send(data)
};
