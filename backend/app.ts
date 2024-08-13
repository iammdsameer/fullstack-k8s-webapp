import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

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
  console.log({ email });
  const doc = new Newsletter({ email });
  doc
    .save()
    .then(() => res.send("You are officially added to the newsletter!"))
    .catch((err) => res.send("Error"));
});

app.get("/api/list", async function (req, res) {
  const result = await Newsletter.find().select("email id");
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
