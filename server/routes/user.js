const express = require("express");
const router = express.Router();
const Controller = require("../controllers/user");
const { upload, setDestination } = require("../middlewares/image");
const validate = require("../middlewares/validation");

router.post(
  "/add",
  setDestination("./public/images/"),
  upload.single("image"),
  validate,
  Controller.addBooking
);
router.get("/show", Controller.showAllDates);

module.exports = router;
