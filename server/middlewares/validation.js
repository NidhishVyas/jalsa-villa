const fs = require("fs");

module.exports = async (req, res, next) => {
  let response = { success: false, message: "" };

  if (req.file) {
    if (
      !req.file.mimetype.includes("jpeg") &&
      !req.file.mimetype.includes("png") &&
      !req.file.mimetype.includes("jpg")
    ) {
      fs.unlinkSync(req.file.path);
      response.message = "Please provide image with appropriate file type"; 
      return res.status(400).json(response);
    }
  }

  next();
};
