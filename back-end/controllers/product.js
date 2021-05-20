const express = require("express");
const con = require("../database");

const router = express.Router();

/**
 * Use for get all product
 * Must be return all product
 */
router.get("/all-product", (req, res) => {
  
  const sql = "select * from products";
  con.query(sql, (err, result) => {
    console.log(err)
    if (err) throw err;
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "select * from product where id = ?";
  const data = [id];
  const values = Object.values(data);
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;