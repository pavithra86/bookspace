const express = require("express")
const router = express.Router()
const sign = require("../signin/Schsign")

router.post("/", async(req, res) => {
    let a = await sign.find({ email: req.body.email })
    if (a.length !== 0) {
        if (a[0].pass == req.body.pass) {
            console.log("it is crt")
            res.status(200).json({ ver: "crt", id: a[0]._id })
        } else {
            console.log("pass is wrong")
            res.status(200).json({ var: "pass is worng" })
        }
    } else {
        console.log("email is wrong")
        res.status(200).json({ var: "email is wrong" })
    }
    console.log(a)
})

module.exports = router