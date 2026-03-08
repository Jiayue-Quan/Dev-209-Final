import { useState } from 'react'

const MovieList = ({title}) => {
    
    const tempImages = ["./src/assets/1.jpg", "./src/assets/2.jpg", "./src/assets/3.jpg", "./src/assets/4.jpg"]
    //the index of the first poster shown on-screen (relative to the tempImages list)
    const [currListInd, setCurrListInd] = useState(0);
    

    const moveList = (next) => {
        next ? 
        setCurrListInd((currListInd + 1) % tempImages.length)
        : setCurrListInd((currListInd - 1) % tempImages.length)
    }

    const getCurrList = () => {
        if (currListInd < 0) {
            return tempImages.slice(currListInd).concat(tempImages.slice(0, 4+(currListInd)));
        }
        if (currListInd + 4 > tempImages.length) {
            return tempImages.slice(currListInd).concat(tempImages.slice(0, currListInd));
        }
        return tempImages.slice(currListInd, currListInd + 4);
    }
   

    return <>
    <h1>{title}</h1>
    
    <li className="moviesList">
        <input type="image" src="./src/assets/backArrow.png" onClick={() => {moveList(false)}}/>
            {
                getCurrList().map((image) => <img className="moviePoster" src={image} key={image}/>)
            }

        <input type="image" src="./src/assets/nextArrow.png" onClick={() => {moveList(true)}}/>
    </li>
    
    </>
}

export default MovieList;