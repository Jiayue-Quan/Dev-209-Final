import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
 
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
 
  // Local Storage State
  const [isFavorite, setIsFavorite] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(false);
 
  useEffect(() => {
    // Fetch Movie Data and Trailer from TMDB
    fetch(`http://localhost:3000/api/movie/${id}`)
      .then(res => res.json())
      .then(data => {setMovie(data)
      });
 
    // Check localStorage status
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    const watch = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setIsFavorite(favs.some(m => m.id === parseInt(id)));
    setInWatchlist(watch.some(m => m.id === parseInt(id)));
  }, [id]);
 
  const toggleList = (key, isPresent, setter) => {
    let list = JSON.parse(localStorage.getItem(key) || '[]');
    if (isPresent) {
      list = list.filter(m => m.id !== movie.id);
    } else {
      list.push({ id: movie.id, title: movie.title, poster_path: movie.poster_path });
    }
    localStorage.setItem(key, JSON.stringify(list));
    setter(!isPresent);
  };
 
  if (!movie) return <div>Loading...</div>;
 
  return (
    <div className="movie-page">
      <h1>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
      <p>Rating: ⭐ {movie.vote_average}</p>
     
 
      <div className="actions">
        <button onClick={() => toggleList('favorites', isFavorite, setIsFavorite)}>
          {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
        <button onClick={() => toggleList('watchlist', inWatchlist, setInWatchlist)}>
          {inWatchlist ? '➖ Remove from Watchlist' : '➕ Add to Watchlist'}
        </button>
        <button onClick={() => setShowReviewForm(!showReviewForm)}>Review Movie</button>
      </div>
 
      {showReviewForm && <ReviewComponent movieId={id} />}
    </div>
  );
};
 
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
 
// const MovieDetails = () => {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);
//     const API_KEY = "REPLACE_WITH_YOUR_TMDB_KEY";
 
//     useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
//     .then(res => res.json())
//     .then(data => setMovie(data));
// }, [id]);
 
 
 
// const handleToggleWatchlist = () => {
// const currentWatchlist = JSON.parse(localStorage.getItem('cine_watchlist')) || [];
// const isAlreadySaved = currentWatchlist.some(item => item.id === movie.id);
 
// let updatedList;
// if (isAlreadySaved) {
// updatedList = currentWatchlist.filter(item => item.id !== movie.id);
// } else {
// updatedList = [...currentWatchlist, movie];
// }
 
// localStorage.setItem('cine_watchlist', JSON.stringify(updatedList)); window.location.reload(); // This refreshes the page to show the new button state };
 
// if (!movie) {
//     return <div style={{ padding: '3rem', textAlign: 'center' }}>Loading...</div>;
// }
 
// return (
//     <div style={{ padding: '0 0 4rem 0' }}>
//         <div style={{
//         position: 'relative',
//         height: '400px',
//         backgroundImage: url(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`),
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//         }}>
//         <div style={{
//         position: 'absolute',
//         inset: 0,
//         background: 'linear-gradient(to top, #0f172a, transparent)'
//         }} />
//     </div>
 
// );
// };
export default MovieDetails;