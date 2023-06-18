const express = require("express");
const app = express();
const router = express.Router();
const cart = require("./Schcart");



// router.use(requiredAuth())

router.get("/", async(req, res) => {

    var datass = await cart.find()
    console.log("asdgsdgsrg", datass);
    res.status(200).json(datass);


});


router.post("/", async(req, res) => {
    console.log("i am in post sign");
    console.log("req")
    try {
        const carts = await cart.create({

            Book_name: req.body.Book_name,
            Person_id: req.body.Person_id,
            Book_id: req.body.Book_id,
            Book_price: req.body.Book_price,
            items: req.body.items,
            Image: req.body.Image

        });

        res.status(200).json(" it is get cart");
    } catch (err) {
        // console.log(err)

        res.json(err);
    }
});

router.delete("/", async(req, res) => {
    console.log("i am cart deleting");
    console.log(req.body)
    const delet = await cart.remove({ _id: req.body.idd })
    res.status(200).json(delet)
})

module.exports = router;