const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content:{
    type:String
  },
  image: {
    type: String,
    required: true,
  },
  notes: [
    {
      type: String,
    },
  ],
  videos:[
    {
      type:String,
    }
  ],
  videoLectures: [
    {
      type: String,
    },
  ],
  quizes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
  ],
});

const course = mongoose.model("Course", courseSchema);
module.exports = course;
