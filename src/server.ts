import axios from "axios";
import express from "express";
import { API_KEY } from "./common/string";
const app = express();
const port = process.env.PORT || 3001;
app.get("/test", async (req, res) => {

  const data = await axios.get(
    "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=5B94DAD2545FCAA73447EEF18ED8432A"
  );
  res.send(data)
});
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/`);
});
