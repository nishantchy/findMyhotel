const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Hotel name is required"] },
  basePrice: { type: Number, required: [true, "Base price is required"] },
  numberOfRooms: {
    type: Number,
    required: [true, "Number of rooms is required"],
  },
  location: {
    name: { type: String, required: [true, "Location name is required"] },
    address: { type: String, required: [true, "Address is required"] },
    latitude: { type: Number, required: [true, "Latitude is required"] },
    longitude: { type: Number, required: [true, "Longitude is required"] },
  },
  ratings: { type: Number, default: 0 },
  propertyType: { type: String, required: [true, "Property type is required"] },
  images: [{ type: String }],
  email: { type: String, required: [true, "Email is required"] },
  description: { type: String },
  phoneNumber: { type: String, required: [true, "Phone number is required"] },
  roomTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: "RoomType" }],
});

module.exports = mongoose.model("Hotel", HotelSchema);
