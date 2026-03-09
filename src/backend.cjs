const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors({
  //TODO: change to actual URL
  origin: 'http://localhost:5173',
  // Allow following methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // Allow following headers
  allowedHeaders: ['Content-Type', 'Authorization'],
  // Enable credentials
  credentials: true,
  // How long the results of a preflight request can be cached
  maxAge: 86400 // 24 hours
}));

app.use(express.json());

const extractToken = (authHeader) => {
  if (!authHeader) return null;
  return authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7) 
    : authHeader;
};

app.get("/api/movie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    res.json(data);
    console.log(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});