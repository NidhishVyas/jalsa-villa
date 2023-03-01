const User = require("../models/User");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const DOMPurify = createDOMPurify(new JSDOM("").window);
const fs = require("fs");

module.exports.addBooking = async (req, res) => {
  const {
    fname,
    lname,
    contactNumber,
    email,
    checkIn,
    checkOut,
    adults,
    children,
  } = req.body;

  let response = { success: false, message: "", errMessage: "" };
  let regex = new RegExp(/^((?!\.)[\w_.-]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);

  if (!req.file) {
    response.message = "Please upload screenshot of payment";
    return res.status(400).json(response);
  } else if (!fname) {
    fs.unlinkSync(req.file.path);
    response.message = "Please provide your first name";
    return res.status(400).json(response);
  } else if (!lname) {
    fs.unlinkSync(req.file.path);
    response.message = "Please provide your last name";
    return res.status(400).json(response);
  } else if (adults === 0) {
    fs.unlinkSync(req.file.path);
    response.message = "Please provide a count of adults";
    return res.status(400).json(response);
  } else if (!email.match(regex)) {
    fs.unlinkSync(req.file.path);
    response.message = "Please provide a proper email";
    return res.status(400).json(response);
  } else if (!contactNumber || contactNumber.length !== 10) {
    fs.unlinkSync(req.file.path);
    response.message = "Please provide a proper contact number";
    return res.status(400).json(response);
  }

  try {
    let userDb = await User.find();
    if (checkIn && checkOut) {
      if (
        JSON.stringify(new Date(checkIn)) >= JSON.stringify(new Date(checkOut))
      ) {
        fs.unlinkSync(req.file.path);
        response.message = "Check-in cannot be done after check-out";
        return res.status(400).json(response);
      }
      userDb = userDb.filter((item) => {
        return (
          (JSON.stringify(checkIn) >= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkIn) <= JSON.stringify(item.checkOut)) ||
          (JSON.stringify(checkOut) >= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkOut) <= JSON.stringify(item.checkOut)) ||
          (JSON.stringify(checkIn) <= JSON.stringify(item.checkIn) &&
            JSON.stringify(checkOut) >= JSON.stringify(item.checkOut))
        );
      });

      if (userDb.length !== 0) {
        fs.unlinkSync(req.file.path);
        response.message = "These dates are not available";
        return res.status(400).json(response);
      }
    } else {
      fs.unlinkSync(req.file.path);
      response.message = "Please provide check-in and check-out date";
      return res.status(400).json(response);
    }

    let image;
    if (req.file.originalname != "") {
      if (process.env.NODE_ENV == "prod")
        image = process.env.APP_URL + "/images/" + req.file.filename;
      if (process.env.NODE_ENV == "dev")
        image = process.env.APP_DEV_URL + "/images/" + req.file.filename;
    }

    let user = new User({
      name: fname + " " + lname,
      checkIn,
      checkOut,
      contactNumber,
      email,
      guests: { adults, children },
      paymentSS: image,
    });

    let result = await user.save();
    if (result) {
      response.success = true;
      response.message = "Your booking is done successfully";
      response.errMessage = undefined;
      res.status(201).json(response);
    }
  } catch (err) {
    console.log(err);
    response.errMessage = err.message;
    response.message = "Something went wrong. Please try again.";
    res.status(400).json(response);
  }
};

module.exports.showAllDates = async (req, res) => {
  let response = { success: false, message: "", errMessage: "", data: "" };
  await User.find({ isApprove: { $ne: "Unapproved" } })
    .then((result) => {
      response.success = true;
      response.message = "Search complete";
      response.data = result;
      response.errMessage = undefined;
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      response.errMessage = err.message;
      response.message = "Something went wrong. Please try again.";
      res.status(400).json(response);
    });
};
