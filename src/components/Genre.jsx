import services from '../services/services'

const Genre = ({genreId, genre}) => {
    const genreClick = async (genre) => {
        console.log(genre);
        const response = await services.searchByGenre(genreId);
        
        console.log(response.results.map(movie => movie.title));

    }
    return (
        <div className="genreTag" onClick={() => genreClick(genre)}>
            <p>{genre}</p>
        </div>
    )
}

export default Genre;