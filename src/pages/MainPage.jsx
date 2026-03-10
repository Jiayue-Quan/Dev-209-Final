import { useState } from 'react'
import MovieList from '../components/MovieList'
import Genre from '../components/Genre'

const MainPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            <Genre genre="horror"/>
            <MovieList title="Newest Movies"/>
            {loggedIn ? 
            (<MovieList title="Recommended"/>) 
            : (<MovieList title="Highly Rated"/>)
            }
        </>

    )
}

export default MainPage;