const User = require("../models/User");
const createDOMPurify = require("dompurify");

module.exports.getPending = async (req, res) => {
  let response = { success: false, message: "", errMessage: "", data: "" };
  await User.find({ isApprove: "Pending" })
    .sort({ checkIn: 1 })
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

module.exports.getAcknowledged = async (req, res) => {
  let response = { success: false, message: "", errMessage: "", data: "" };
  await User.find({ isApprove: { $ne: "Pending" } })
    .sort({ checkIn: 1 })
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

module.exports.updateStatus = async (req, res) => {
  const bookingId = req.params.id;
  const { status } = req.body;
  let response = { success: false, message: "" };

  User.findOneAndUpdate(
    { _id: bookingId },
    {
      $set: {
        isApprove: status,
      },
    },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        response.message = "Something went wrong. Please try again.";
        return res.status(400).json(response);
      }
      response.success = true;
      response.message = "Booking " + status + " successfully";
      res.status(200).json(response);
    })
    .catch((err) => {
      response.errMessage = err.message;
      response.message = "Something went wrong. Please try again.";
      res.status(400).json(response);
    });
};
