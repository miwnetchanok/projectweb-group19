const express = require("express");
const con = require("../database");

const router = express.Router();

router.post('/order', (req,res)=>{
    console.log(req.body)
    let userId = req.body.userid
    console.log(parseInt(userId));
    const sql1= "INSERT INTO orders SET user_id = ?"
    const data = [parseInt(userId)]
    const values = Object.values(data)
    con.query(sql1,values,(error,result)=>{
        console.log(error)
        const sql2=`select max(id) as order_id from orders`
        con.query(sql2,(error,result)=>{
            console.log(result)
            for (let item of req.body.cart) {
                let orderId = result[0].order_id
                let productName = item.name
                let quantity = item.quantity
                let price = item.price
                let total = parseInt(item.price) * parseInt(item.quantity)
               const sql3 = "insert into order_detail set order_id = ?, product_name = ?, quantity = ?, price = ?, total =?" 
               const data = [parseInt(orderId),productName,parseInt(quantity),parseInt(price),parseInt(total)]
               const values = Object.values(data)
               con.query(sql3, values, (error,result) => {
                   console.log(error);
               })
            }
            return res.send({message: 'Create order success.'})
        })
    })
})












module.exports = router;