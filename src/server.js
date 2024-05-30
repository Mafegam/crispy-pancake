import express from "express";
import morgan from "morgan";

const server = express();

server.use(morgan("dev"));
server.use(express.json());

export default server;