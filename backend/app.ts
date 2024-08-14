import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test")
  .then(() => console.log("Connected to MongoDB!"));

const schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

const Newsletter = mongoose.model("Newsletter", schema);

app.post("/api/new", function (req, res) {
  const { email } = req.body;
  const doc = new Newsletter({ email });
  doc
    .save()
    .then(() =>
      res.send({
        status: true,
        message: "You are now officially a part of the newsletter!",
      })
    )
    .catch((_) =>
      res.send({ status: false, message: "Oops! Something went wrong!" })
    );
});

app.get("/api/list", async function (_, res) {
  const result = await Newsletter.find().select("email id");
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
