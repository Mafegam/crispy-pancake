import "dotenv/config";

import "./DataBaseConnect.js";

import server from "./server.js"

server.listen(3000, ()=>{
    console.log("Server running from port 3000");
})