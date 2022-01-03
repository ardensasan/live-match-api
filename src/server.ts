import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 4000;
import cors from "cors"
import match from './routes/match'
import team from './routes/team'
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(match)
app.use(team)
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});