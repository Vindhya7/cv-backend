const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//configuration
require("dotenv").config();

//creating express server
const app = express();
const port = process.env.PORT || 5000;

//middleware - cors - allows to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //get from mongoose dashboard
console.log(uri);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //starting connect
const connection = mongoose.connection; //
connection.once("open", () => {
  console.log("Mongoose connection successful");
});

const aboutmeRouter = require("./routes/aboutme");
const projectRouter = require("./routes/projects");
const educationRouter = require("./routes/education");
const experienceRouter = require("./routes/experience");
const skillsRouter = require("./routes/skills");

app.use("/aboutme", aboutmeRouter);
app.use("/projects", projectRouter);
app.use("/education", educationRouter);
app.use("/experience", experienceRouter);
app.use("/skills", skillsRouter);

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
