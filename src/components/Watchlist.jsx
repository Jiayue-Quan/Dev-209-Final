import React from 'react';
import { Link } from 'react-router-dom';

const Watchlist = () => {
// We use the same 'cine_watchlist' key we used in the logic before
const savedItems = JSON.parse(localStorage.getItem('cine_watchlist')) || [];

if (savedItems.length === 0) {
return (
<div style={{ padding: '5rem', textAlign: 'center' }}>
<h2>Your watchlist is empty.</h2>
<Link to="/" style={{ color: '#ef4444' }}>Go find some movies!</Link>
</div>
);
}

return (
    <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>My Watchlist</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {savedItems.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{ width: '100%', borderRadius: '8px' }} alt={movie.title} />
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{movie.title}</p>
                </Link>
            ))}
        </div>
    </div>
    );
};