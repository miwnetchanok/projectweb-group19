const express = require("express");
const con = require("../database");

const router = express.Router();

router.post("/register", (req, res) => {
  const { firstname,lastname,email,username, password } = req.body;
  const sql = "insert into users(firstname,lastname,email,username, password) values (?,?,?,?, ?)";
  const data = [firstname,lastname,email,username, password];
  const values = Object.values(data);
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    if (result) {
      res.send({ status: true, msg: "Register success" });
    }
  });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
  
    /**
     * Have ? systax ex. where or insert data
     */
    const sql = "select * from users where username = ? and password = ?";
    const data = [username, password];
    const values = Object.values(data);
    con.query(sql, values, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        console.log(result);
        res.send({ status: true, msg: "Login success", userID: result[0].id });
      } else {
        res.send({ status: false, msg: "Username or password is not define" });
      }
    });
  });
  
  module.exports = router;