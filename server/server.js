// server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const hotelRoutes = require("./routes/hotels");
const roomTypeRoutes = require("./routes/roomTypes");

const app = express();

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas", error);
  });

app.use(express.json());
app.use("/api", hotelRoutes);
app.use("/api", roomTypeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
