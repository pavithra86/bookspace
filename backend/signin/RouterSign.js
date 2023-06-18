const express = require("express");
const app = express();
const router = express.Router();
const sign = require("./Schsign");






// router.use(requiredAuth())

router.get("/", async (req, res) => {
 
    var datass = await sign.find()
    console.log("asdgsdgsrg", datass);
    res.status(200).json(datass);
    
 
});


router.post("/", async (req, res) => {
  console.log("i am in post sign");
  console.log("req")
  try {
    const signpost = await sign.create({
      
      name :req.body.name,  
      email: req.body.email,
      pass: req.body.pass,
      phone: req.body.phone,
     
    });

    res.status(200).json(" it is sign");
  } catch (err) {
    // console.log(err)
   
    res.json(err);
  }
});

module.exports = router;
