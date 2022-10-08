const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "admin_nut",
  host: "128.199.182.220",
  password: "028158702n",
  database: "admin_dev",
});

app.listen("9000", () => {
  console.log("Server Is Running on Compass! 3001");
});

app.get("/test_user/list", (req, res) => {
  db.query("SELECT * FROM test_user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/areas/list", (req, res) => {
  db.query("SELECT * FROM areas", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/user/create", (req, res) => {
  const protion_id = req.body.protion_id;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const firstname = req.body.firstname;
  const landname = req.body.landname;
  const status_id = req.body.status_id;
  const branch_id = req.body.branch_id;

  db.query(
    "INSERT INTO user (protion_id, username, password, email, firstname, landname, status_id, branch_id) VALUES(?,?,?,?,?,?,?,?)",
    [
      protion_id,
      username,
      password,
      email,
      firstname,
      landname,
      status_id,
      branch_id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserte UserName And PassWord ComPlete!!");
      }
    }
  );
});
