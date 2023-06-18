const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require('cors')
app.use(cors())
app.use(express.json())
const sign = require("./signin/RouterSign")
const book_detail = require("./BookDetails/RouterBook")
const cart = require("./cart/Routercart")
const purchase = require("./purchare/RouterPurchase")
const login = require("./login/login")
app.use("/sign", sign);
app.use("/detail", book_detail)
app.use("/cart", cart)
app.use("/login", login)
app.use("/purchase", purchase)





mongoose.connect("mongodb://localhost:27017/BookSpace", (err) => {
    if (err) { console.log("error", err) } else { console.log("connect") }
})

app.listen(2000, (res, req) => {
    console.log("it is working on 2000")
})