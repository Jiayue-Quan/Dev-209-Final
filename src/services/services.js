const baseURL = "http://localhost:3000"

const searchByGenre = async (genreId) => {
    const res = await fetch(`${baseURL}/movies/${genreId}`)
    return res.json();
}

const getMovie = async (id) => {
    const res = await fetch(`${baseURL}/movie/${id}`)
    return res.json();
}

const getImage = (movie) => {
    const posterURL = movie["poster_path"]
    return `https://image.tmdb.org/t/p/original${posterURL}`;
}



export default { searchByGenre, getImage, getMovie }