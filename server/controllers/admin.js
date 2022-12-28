const User = require("../models/User");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const DOMPurify = createDOMPurify(new JSDOM("").window);

module.exports.updateStatus = async (req, res) => {
  await User.find()
    .then((result) => res.status(200).json("done"))
    .catch((err) => {
      res.status(400).json("nope");
    });
};

module.exports.getPending = async (req, res) => {
  let response = { success: false, message: "", errMessage: "", data: "" };
  await User.find({ isApprove: "Pending" })
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
