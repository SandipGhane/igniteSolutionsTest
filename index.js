"use strict"
const express = require("express");
const config = require("./config/config");
const cors = require('cors');
const path = require('path');

const helloRouter = require('./routes/helloRoute');

const app = express(),

addMiddleware = async ()=>{
  app.use(express.json());
  app.use(express.urlencoded({ limit: '50mb', extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(cors());
}

const addRoutes =()=>{
  app.use('/',helloRouter);
}

const start=async ()=>{
  try{
    await addMiddleware()
    addRoutes();
  }catch(error){
    console.error(error.message);
  }
}


start();

const port = Number(process.env.PORT || config.server.port)

const server = app.listen(port, () =>
  console.log(`Listening on ${server.address().port}`)
)

module.exports = app 
