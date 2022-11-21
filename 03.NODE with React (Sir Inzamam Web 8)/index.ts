import express from "express";
// const express = require('express')
const app = express();
const port = 3000;
console.log("Hello World! Ultra pro max");

app.get("/", (req, res) => {
  res.send(`"Hello World!", ${req.ip}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// npm i --save-dev @types/express