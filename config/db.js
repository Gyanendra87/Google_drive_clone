const mongoose = require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/google_drive")
  .then(() => {
    console.log("✅ MongoDB connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

module.exports=connection;