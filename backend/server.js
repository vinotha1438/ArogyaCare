const express = require("express");
const cors = require("cors");
const mealRoutes = require("./routes/mealRoutes");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.json());

app.use("/api/meals", mealRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("ArogyaCare Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend working fine 👍",
  });
});
 
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    success: true,
    message: "User registered successfully",
    user: {
      name,
      email,
    },
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    success: true,
    message: "Login successful",
    email,
  });
});

app.get("/test", (req, res) => {
  res.send("TEST WORKING");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});