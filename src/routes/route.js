const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/weatherDetails", CowinController.getWeather)
router.get("/cowin/districtsInState", CowinController.getDistrictsAndDate) // 
router.post("/memes", CowinController.memesById)

/*router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/memes",CowinController.getMemes)*/

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;