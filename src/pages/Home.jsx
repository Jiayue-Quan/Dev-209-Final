import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [movies, setMovies] = useState([]);
/*const API_KEY = "REPLACE_WITH_YOUR_TMDB_KEY";

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then(res => res.json())
.then(data => setMovies(data.results));
}, []);*/

return (
<div style={{ padding: '2rem' }}>
    <h2>Popular Movies</h2>
    {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
        {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
        <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{movie.title}</p> 
        </Link>))
        }
    </div> */}
</div>
);
};
export default Home;