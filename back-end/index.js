/*const express = require('express')
const app = express()
const PORT = 4000
const bodyParser = require('body-parser')
const cors = require('cors');
const mysql = require('mysql')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

/*function insertUser(firstname,lastname,username,email,password) {
    return new Promise((resolve,reject) => {
        const sql = `insert into register (firstname,lastname,email,username,password) values ('${firstname}','${lastname}','${email}','${username}','${password}')`
        db.query(sql, (error, result) => {
            if (error) return reject(error)
            return resolve(console.log(login))
        })
    })
}
app.post('/register', async (req,res) => {
    try {
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password
        const insert = await insertUser(firstname,lastname,email,username,password)
        return res.status(201).send({
            message: 'Register successful.'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: 'Sorry, something went wrong.'
        })
    }
})

function findUser(username,password) {
    return new Promise((resolve,reject) => {
        const sql = `select * from login where username = '${username}'`
            db.query(sql, (error,result) => {
            console.log(result);
            if (error) return reject(error)
            if (result.length === 0) {
                return reject({
                    code: '001',
                    msg: 'username is not exist.'
                })
            }
            if (result[0].password !== password) {
                return reject({
                    code: '002',
                    msg: 'Invalid password!'
                })
            }
            return resolve(result)
        })
    })
}

function findUser(username,password) {
    return new Promise((resolve,reject) => {
        const sql = `select * from register where username = '${username}'`
            db.query(sql, (error,result) => {
            console.log(result);
            if (error) return reject(error)
            if (result.length === 0) {
                return reject({
                    code: '001',
                    msg: 'username is not exist.'
                })
            }
            if (result[0].password !== password) {
                return reject({
                    code: '002',
                    msg: 'Invalid password!'
                })
            }
            return resolve(result)
        })
    })
}
app.post('/login', async (req,res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const user = await findUser(username,password)
        return res.status(200).send({
            message: 'Login successful.',
            username: username
        })
    } catch (error) {
        console.log(error)
        if (error.code === '001' || error.code === '002') {
            return res.status(500).send({
                message: error.msg
            })
        }
        return res.status(500).send({
            message: 'Sorry, something went wrong.'
        })
    }
})

app.listen(PORT, () => console.log(`Server is started mdtr. Port ${PORT}.`));*/


const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const con = require("./database");

const authRouter = require("./controllers/auth");
const productRouter = require("./controllers/product");
const cartRouter = require("./controllers/cart");
const checkoutRouter = require("./controllers/checkout");

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/checkout", checkoutRouter);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.listen(port, () => {
  console.log(`Server running at   http://localhos:t${port}`);
});