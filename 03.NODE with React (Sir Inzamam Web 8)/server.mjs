// console.log("server with mjs with node --watch  ")
import express from "express";
// const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

console.log("Hello World! Ultra pro max");

app.get("/", (req, res) => {
  res.send(`"Hello World Shehzad!", ${req.ip}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// npm i --save-dev @types/express
