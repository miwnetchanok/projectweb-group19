const express = require("express");
const con = require("../database");

const router = express.Router();

router.post("/add-cart", (req, res) => {
  const { productID, userID } = req.body;
  const sql = "insert into cart(productID, userID) values (?, ?)";
  const data = [productID, userID];
  const values = Object.values(data);
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send({ status: true, msg: "Add to cart success" });
  });
});

router.get("/my-cart", (req, res) => {
  const { userID } = req.query;
  const sql =
    "select * from cart c inner join product p on c.productID=p.id where c.userID = ?";
  const data = [userID];
  const values = Object.values(data);
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
