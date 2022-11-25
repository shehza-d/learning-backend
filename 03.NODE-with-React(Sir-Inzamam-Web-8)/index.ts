// npm i --save-dev @types/express

import express from "express";
// const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

console.log("Hello World! Ultra pro max");

app.get("/", (req: express.Request, res: express.Response): void => {
  res.send(`"Hello World!", ${req.ip}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
