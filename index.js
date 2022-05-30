'use strict';

const server=require("./src/server.js");
const dotenv=require("dotenv");

dotenv.config();

const port = process.env.PORT;





server.start(port ||3002);