const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
dotenv.config();
connectDB();

const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server Online" });
});

app.use("/api/v1/auth", require("./routes/authRoutes"));

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
