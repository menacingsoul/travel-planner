const mongoose = require("mongoose");

// Define Trip Schema
const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  modeOfTransport: {
    type: String,
    enum: ["car", "train", "bus", "ferry", "bike", "flight"],
    required: true,
  },
  fromDestination: {
    type: String,
    required: true,
  },
  toDestination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community", // Reference to the Community model
  },
  pendingJoinRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Trip model
const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
