import express from "express";
import http from "http";
import { Socket } from "socket.io";
import { getLiveMatches } from "./model";
import route from "./route";
import _ from "underscore";
import { startGetLiveMatches } from "./service/match";
const app = express();
const server = http.createServer(app);
const io: Socket = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
declare global {
  var socket: Socket;
}
global.socket = io;
startGetLiveMatches();
app.use(route);

server.listen(4000, () => {
  console.log("listening on *:4000");
});
