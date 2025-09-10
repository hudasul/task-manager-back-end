const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(logger("dev"));

app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/task", taskRoutes);

app.listen(3000, () => {
  console.log("App is listening!");
});
