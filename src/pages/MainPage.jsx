import { useState } from 'react'
import MovieList from '../components/MovieList'
import Genre from '../components/Genre'
import services from '../services/services'

const MainPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            
            <MovieList title="Newest Movies" toGet={services.getNew}/>
            {loggedIn ? 
            (<MovieList title="Recommended" toGet={services.getPopular}/>) 
            : (<MovieList title="Popular" toGet={services.getPopular}/>)
            }
        </>

    )
}

export default MainPage;