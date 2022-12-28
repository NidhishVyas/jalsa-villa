const User = require("../models/User");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const DOMPurify = createDOMPurify(new JSDOM("").window);

module.exports.getDetails = async (req, res) => {
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

  if (!fname) {
    response.message = "Please provide your first name";
    return res.status(400).json(response);
  } else if (!lname) {
    response.message = "Please provide your last name";
    return res.status(400).json(response);
  } else if (!adults) {
    response.message = "Please provide a count of adults";
    return res.status(400).json(response);
  } else if (!email.match(regex)) {
    response.message = "Please provide your proper email";
    return res.status(400).json(response);
  } else if (!contactNumber || contactNumber.length !== 10) {
    response.message = "Please provide your proper contact details";
    return res.status(400).json(response);
  }

  try {
    let userDb = await User.find();
    if (checkIn && checkOut) {
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
        response.message = "These dates are not available";
        return res.status(400).json(response);
      }
    } else {
      response.message = "Please provide check-in date";
      return res.status(400).json(response);
    }

    let user = new User({
      name: fname + " " + lname,
      checkIn,
      checkOut,
      contactNumber,
      email,
      guests: { adults, children,  },
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

module.exports.showAll = async (req, res) => {
  let response = { success: false, message: "", errMessage: "", data: "" };
  await User.find()
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
