import express from 'express';
const app = express();
const port = 4000;
import cors from "cors"
import match from './routes/match'
import team from './routes/team'
import { getLiveMatches } from './pusher/match';
app.use(cors());
app.use(express.json());
getLiveMatches();
app.use(match)
app.use(team)
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});