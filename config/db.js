const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://someshrocks144:somesh2004@cluster0.kuaj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to database!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
