import { useState } from 'react'
import MovieList from './MovieList'

const MainPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
        
            <MovieList title="Newest Movies"/>
            {loggedIn ? 
            (<MovieList title="Recommended"/>) 
            : (<MovieList title="Highly Rated"/>)
            }
        </>

    )
}

export default MainPage;