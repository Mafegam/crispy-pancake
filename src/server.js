import express from "express";
import tasksRouter from "./Routes/tasksRouter.js";
import morgan from "morgan";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/tasks", tasksRouter)

server.get('/', (request, answer)=>{
   
    answer.status(404).json({
        message: "Hi!"
    });
    
});

export default server;