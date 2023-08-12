// https://github.com/Raza2468/learning-SQL

import express, { json } from "express";
import { urlencoded } from "body-parser";
import cors from "cors";
import { createConnection } from "mysql";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const db = createConnection({
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "employee",
  // 65.254.59.195:3306
  // host: "119.155.206.103",
  host: "65.254.59.195",
  // port: 3306,
  user: "tecstik_testUser",
  password: "kS]U*GS2~&ys",
  database: "tecstik_Employee_Management",
  timeout: 100000,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Successfully Connect.....");
});

// ====================> get all data

app.get("/employeetable", (req, res) => {
  db.query("SELECT * FROM `employeetable` WHERE 1", (err, result) => {
    if (err) throw err;
    else {
      // console.log(result);
      res.send(result);
    }
  });
});

// ====================> get specific data

app.post("/SpecificEmployeeTable", (req, res) => {
  let { id, firstname, lastname, email, phonenumber, department, position } =
    req.body;
  let sql =
    " SELECT * FROM employeetable WHERE position = ? OR + department = ? OR + id = ? OR + phonenumber = ?";
  // + mysql.escape(req.body.position);
  db.query(sql, [position, department, id, phonenumber], (err, result) => {
    if (err) throw err;
    else {
      res.send(result), console.log(result);
    }
  });
});

// ====================> post data

app.post("/employeetable", (req, res) => {
  let { firstname, lastname, email, phonenumber, department, position } =
    req.body;
  let post = {
    phonenumber: phonenumber,
    department: department,
    firstname: firstname,
    lastname: lastname,
    position: position,
    email: email,
  };

  let sql = "INSERT INTO employeetable SET ?";

  db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    console.log(post);
    res.send(post);
  });
});

// ====================> Update api

app.post("/updateemployee/:id", (req, res) => {
  let newName = "MERN Stack Developer";
  let department = "Developer";

  let sql = `UPDATE employeetable SET position = '${newName}', department = '${department}' WHERE id = ${req.body.id}`;
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }

    res.send("Post updated...");
  });
});

// ====================> delet api

app.post("/deleteemployee/:id", (req, res) => {
  let sql = `DELETE FROM employeetable WHERE id = ${req.body.id}`;
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee deleted");
  });
});

// ====================> post data

app.post("/attendancetable", (req, res) => {
  let { employeeID, checkInTime, checkOutTime } = req.body;
  let post = {
    employeeID: employeeID,
    checkInTime: checkInTime,
    checkOutTime: checkOutTime,
  };

  let sql = "INSERT INTO attendancetable SET ?";

  db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    console.log(post);
    res.send(post);
  });
});

// ====================> get all data

app.get("/attendancetable", (req, res) => {
  db.query("SELECT * FROM `attendancetable` WHERE 1", (err, result) => {
    if (err) throw err;
    else {
      // console.log(result);
      res.send(result);
    }
  });
});

// ====================> get specific data

app.post("/SpecificTableData", (req, res) => {
  let { id, employeeID, checkInTime, checkOutTime } = req.body;
  let sql =
    " SELECT * FROM attendancetable WHERE id = ? OR + employeeID = ? OR + checkInTime = ? OR + checkOutTime = ?";
  // + mysql.escape(req.body.position);
  db.query(sql, [id, employeeID, checkInTime, checkOutTime], (err, result) => {
    if (err) throw err;
    else {
      res.send(result), console.log(result);
    }
  });
});

// ====================> post data

app.post("/tasktable", (req, res) => {
  let {
    taskDescription,
    taskStatus,
    taskAssignor,
    taskAssignee,
    startTime,
    targetTime,
    endTime,
  } = req.body;
  let post = {
    taskDescription: taskDescription,
    taskStatus: taskStatus,
    taskAssignor: taskAssignor,
    taskAssignee: taskAssignee,
    startTime: startTime,
    targetTime: targetTime,
    endTime: endTime,
  };

  let sql = "INSERT INTO tasktable SET ?";

  db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    console.log(post);
    res.send(post);
  });
});
// ====================> get all data

app.get("/tasktable", (req, res) => {
  db.query("SELECT * FROM `tasktable` WHERE 1", (err, result) => {
    if (err) throw err;
    else {
      // console.log(result);
      res.send(result);
    }
  });
});

// ====================> get specific data

app.post("/SpecificTakeTable", (req, res) => {
  let { id, taskStatus, taskAssignor, taskAssignee } = req.body;
  let sql =
    " SELECT * FROM tasktable WHERE id = ? OR + taskStatus = ? OR + taskAssignor = ? OR + taskAssignee = ?";
  // + mysql.escape(req.body.position);
  db.query(sql, [id, taskStatus, taskAssignor, taskAssignee], (err, result) => {
    if (err) throw err;
    else {
      res.send(result), console.log(result);
    }
  });
});

app.listen("5000", () => {
  console.log("server start Port ===>", `http://localhost:5000`);
});

//  ~C:\xampp\phpMyAdmin\config.inc.php
// https://www.freakyjolly.com/xampp-how-to-connect-a-remote-database-in-phpmyadmin/