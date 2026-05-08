const express = require("express");

const app = express();

const PORT = 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("CI/CD Pipeline App Running");
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

// Sample API Route
app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Akshat",
    },
    {
      id: 2,
      name: "DevOps User",
    },
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});