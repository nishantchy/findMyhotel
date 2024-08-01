const express = require("express");
const multer = require("multer");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const Hotel = require("../models/Hotels");

const router = express.Router();

const uploadDir = "uploads/";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// Create a new hotel
router.post("/hotels", upload.array("images", 10), async (req, res) => {
  try {
    const {
      name,
      basePrice,
      numberOfRooms,
      location,
      ratings,
      propertyType,
      email,
      description,
      phoneNumber,
    } = req.body;
    const images = req.files ? req.files.map((file) => file.path) : [];

    const parsedLocation =
      typeof location === "string" ? JSON.parse(location) : location;

    const hotel = new Hotel({
      name,
      basePrice,
      numberOfRooms,
      location: parsedLocation,
      ratings,
      propertyType,
      images,
      email,
      description,
      phoneNumber,
      roomTypes: [],
    });

    await hotel.save();
    res.status(201).send(hotel);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).send({ errors });
    }
    console.error("Error creating hotel:", error);
    res.status(400).send(error);
  }
});

// Get all hotels
router.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.find().populate("roomTypes");
    res.json(hotels);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific hotel
router.get("/hotels/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("roomTypes");
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a hotel
router.patch("/hotels/:id", upload.array("images", 10), async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).send("Invalid ID format");
  }

  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }

    const updates = req.body;
    if (req.files && req.files.length > 0) {
      updates.images = req.files.map((file) => file.path);
    }

    if (updates.location) {
      updates.location = {
        name: updates.location.name || hotel.location.name,
        address: updates.location.address || hotel.location.address,
        latitude: updates.location.latitude || hotel.location.latitude,
        longitude: updates.location.longitude || hotel.location.longitude,
      };
    }

    Object.assign(hotel, updates);
    await hotel.save();
    res.json(hotel);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).send({ errors });
    }
    res.status(400).send(error);
  }
});

// Delete a hotel
router.delete("/hotels/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }
    res.send(hotel);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
