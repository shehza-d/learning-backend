"use strict";
// npm i --save-dev @types/express
exports.__esModule = true;
var express_1 = require("express");
// const express = require('express')
var app = (0, express_1["default"])();
var port = process.env.PORT || 3000;
console.log("Hello World! Ultra pro max");
app.get("/", function (req, res) {
    res.send("\"Hello World!\", ".concat(req.ip));
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
