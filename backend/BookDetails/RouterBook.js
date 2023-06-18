const express = require("express");
const app = express();
const router = express.Router();
const BOOK_detail = require("./SchBook");



// router.use(requiredAuth())

router.get("/", async(req, res) => {

    var datass = await BOOK_detail.find()
        // console.log("asdgsdgsrg", datass);
    console.log("i am in get")
    res.status(200).json(datass);


});

router.get("/:id", async(req, res) => {
    var datass = await BOOK_detail.findById(req.params.id)
    console.log("i am in iddetial")
    res.status(200).json(datass)

})

router.post("/", async(req, res) => {
    console.log("i am in post sign");
    console.log("req")
    try {
        const BOOK_details = await BOOK_detail.create({

            Book_name: req.body.Book_name,
            Author_name: req.body.Author_name,
            Price: req.body.Price,
            Image: req.body.Image,
            Book_Id: req.body.Book_Id,
            category_Id: req.body.category_Id

        });

        res.status(200).json(" it is get details");
    } catch (err) {
        // console.log(err)

        res.json(err);
    }
});

module.exports = router;