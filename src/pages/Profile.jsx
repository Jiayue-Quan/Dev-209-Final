const Profile = () => {
  const [user] = useState({ name: "Movie Buff", email: "buff@example.com" });
  const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <div style={{ display: 'flex', padding: '2rem' }}>
      {/* Sidebar */}
      <aside style={{ width: '25%', borderRight: '1px solid #ccc' }}>
        <h3>Account Info</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <h4>Preferences</h4>
        <label><input type="checkbox" /> Dark Mode</label>
      </aside>

      {/* Main Content */}
      <main style={{ width: '75%', paddingLeft: '2rem' }}>
        <h2>User Dashboard</h2>
        
        <details>
          <summary>My Watchlist ({watchlist.length})</summary>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {watchlist.map(movie => (
              <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{ width: '100%' }} />
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        </details>

        {/* Repeat <details> for Favorites and Reviews */}
      </main>
    </div>
  );
};

export default Profile;

// import React, { useState } from "react";
// import ReviewList from '../components/Reviewlist';
// import Watchlist from '../components/Watchlist';
// import Favorites from '../components/Favorites';


// const Profile = () => {
// // Local state for toggling the 3 containers
// const [openSection, setOpenSection] = useState("watchlist");

// // Sample User Data (In a real app, this comes from a database)
// const user = {
// name: "Efficiency Eric",
// email: "eric.dev@example.com",
// memberSince: "March 2026",
// preferences: ["Dark Mode", "Auto-play Trailers", "HD Only"]
// };

// // Pulling data from LocalStorage for the lists
// const watchlist = JSON.parse(localStorage.getItem("cine_watchlist")) || [];
// const favorites = JSON.parse(localStorage.getItem("cine_favorites")) || [];
// const reviews = JSON.parse(localStorage.getItem("cine_reviews")) || [];

// const containerStyle = {
// backgroundColor: "#1e293b",
// borderRadius: "8px",
// marginBottom: "1rem",
// overflow: "hidden",
// border: "1px solid #334155"
// };

// const headerStyle = {
// padding: "1rem",
// backgroundColor: "#334155",
// cursor: "pointer",
// display: "flex",
// justifyContent: "space-between",
// fontWeight: "bold"
// };

// const gridStyle = {
// display: "grid",
// gridTemplateColumns: "repeat(3, 1fr)",
// gap: "1rem",
// padding: "1rem"
// };

// return (
// <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "2rem", gap: "2rem" }}>
// </div>
// );
// };