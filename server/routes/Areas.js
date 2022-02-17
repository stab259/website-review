const express = require("express");
const router = express.Router();
const { Areas } = require("../models");
const { upload } = require("../middlewares/uploadMiddleware");

router.get("/", async (req, res) => {
    const listOfAreas = await Areas.findAll();
    res.json(listOfAreas);
  });

router.post("/AddArea",upload.single('file'), async (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    }
    else{
        const areaname = req.body.areaname
        const area_position = req.body.area_position
        var imgsrc = 'http://127.0.0.1:3001/images/' + req.file.filename
        Areas.create({
            areaname : areaname,
            area_position: area_position,
            area_image : imgsrc
        });
        res.json("SUCCESS")
    }
});
module.exports = router;