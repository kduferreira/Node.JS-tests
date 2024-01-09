const {Person} = require("./person");
const dotenv = require("dotenv")
const connectToDataBase = require('./src/database/connect')
dotenv.config();
connectToDataBase();
//require("./modules/path");
//require("./modules/fs");

//require("./modules/express")
//require("./modules/http")
//const person = new Person ("Kdu");



