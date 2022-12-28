const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      maxlength: 10,
      minlength: 10,
      trim: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    guests: {
      adults: {
        type: Number,
        required: true,
      },
      children: {
        type: Number,
        required: true,
      },
    },
    isApprove: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Approved", "Unapproved"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
