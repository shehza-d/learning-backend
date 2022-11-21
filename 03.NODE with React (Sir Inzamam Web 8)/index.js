"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
console.log("Hello World! Ultra pro max");
app.get("/", (req, res) => {
    res.send(`"Hello World!", ${req.ip}`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// npm i --save-dev @types/express
