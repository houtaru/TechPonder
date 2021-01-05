require("dotenv").config();

const express = require("express");
const router = express.Router();

router.get('/hi', (req, res) => {
    res.status(200).send('hi there');
});

module.exports = router;
