import { config } from "dotenv";
import express from "express";
import { mongoose } from "mongoose";

config();

mongoose
  .connect("mongodb://127.0.0.1:27017/lms")
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 3000;
const app = express();
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
