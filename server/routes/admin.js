const express = require("express");
const router = express.Router();
const Controller = require("../controllers/admin.js");

router.put("/status", Controller.updateStatus);
router.get("/pending", Controller.getPending);

module.exports = router;
