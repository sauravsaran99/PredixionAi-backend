const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const sequelize = require("./config/database");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  console.log("API is UP and running");
  res.json({ message: "Welcome to mysql node...." });
});
app.use("/api", taskRoutes);

console.log(
  "env",
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_HOST
);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // This will recreate the database on every startup
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Call startServer to ensure DB connection is established
startServer();

// Export the Express app
module.exports = app;
