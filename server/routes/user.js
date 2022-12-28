const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user");

router.post("/add", Controller.getDetails);
router.get("/show", Controller.showAll);

module.exports = router;
