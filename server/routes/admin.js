const express = require("express");
const router = express.Router();
const Controller = require("../controllers/admin.js");

router.put("/status/:id", Controller.updateStatus);
router.get("/pending", Controller.getPending);
router.get("/ack", Controller.getAcknowledged);

module.exports = router;
