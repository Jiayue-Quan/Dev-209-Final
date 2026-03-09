import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  // Search Logic
  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_KEY&query=${query}`)
        .then(res => res.json())
        .then(data => setResults(data.results.slice(0, 5)));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#111', padding: '1rem' }}>
      <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">🎬 MovieHub</Link>
        
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          {results.length > 0 && (
            <ul className="search-dropdown" style={{ position: 'absolute', background: 'white', color: 'black' }}>
              {results.map(m => (
                <li key={m.id} onClick={() => { navigate(`/movie/${m.id}`); setQuery(''); }}>
                  {m.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="icons">
          <span>🔔</span>
          <span onClick={() => setShowProfileMenu(!showProfileMenu)} style={{ cursor: 'pointer' }}>👤</span>
          {showProfileMenu && (
            <div className="profile-dropdown" style={{ position: 'absolute', right: 10, background: '#222' }}>
              <Link to="/profile" onClick={() => setShowProfileMenu(false)}>My Profile</Link>
              <button onClick={() => alert('Logged out')}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
// const [query, setQuery] = useState('');
// const navigate = useNavigate();

// const handleSearch = (e) => {
// e.preventDefault();
// // This is where you'd trigger a search results page
// console.log("Searching for:", query);
// };

// return (
// <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #1e293b' }}>
// <Link to="/" style={{ color: '#ef4444', fontWeight: 'bold', textDecoration: 'none' }}>CINECRITIQUE</Link>
// <form onSubmit={handleSearch}>
// <input
// type="text"
// placeholder="Search movies..."
// value={query}
// onChange={(e) => setQuery(e.target.value)}
// style={{ backgroundColor: '#1e293b', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', color: 'white' }}
// />
// </form>
// <div style={{ display: 'flex', gap: '1rem' }}>
// <span>Watchlist</span>
// <span>Profile</span>
// </div>
// </nav>
// );
// };