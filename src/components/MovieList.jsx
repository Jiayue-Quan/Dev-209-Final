const MovieList = ({title}) => {
    const tempImages = ["./src/assets/1.jpg", "./src/assets/2.jpg", "./src/assets/3.jpg", "./src/assets/4.jpg"]

    return <>
    <h1>{title}</h1>
    <li className="moviesList">
            {
                tempImages.map((image) => <img src={image}/>)
            }
    </li>
    </>
}

export default MovieList;