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

const getToday = () => {
  const date = new Date();
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}

app.get("/movie/:id", async (req, res) => {
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

app.get("/movies/:genreId", async (req, res) => {
  const { genreId } = req.params;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&primary_release_date.lte=${getToday()}&vote_count.gte=20`, {
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
    res.status(500).json({ error: "Failed to search movies by genre" });
  }
})

app.get("/api/movies/:sortBy", async (req, res) => {
  const { sortBy } = req.params;
  
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&&primary_release_date.lte=${getToday()}&sort_by=${sortBy}&vote_count.gte=20`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    res.json(data);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to search movies" });
  }
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});