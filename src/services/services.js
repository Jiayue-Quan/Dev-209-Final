const baseURL = "https://api.themoviedb.org/3/"

const getNewMovies = () => {

}

const getImage = (movie) => {
    const posterURL = movie["poster_path"]
    return `https://image.tmdb.org/t/p/original${posterURL}`;
}

export default { getImage }