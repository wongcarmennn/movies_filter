import React, { useEffect } from "react";

export function Movie({movie, config}){
    return(
        <li>
            {config.images.base_url && (
            <img src={config.images.base_url +  "w342" + movie.poster_path} alt={movie.title + " Poster"} />
            )}
            <h3>{movie.title}</h3>
            </li>
    )



}

// Movie.propTypes ={
//     movie: PropTypes.shape({
//         name: PropTypes.string.isRequired
//     }).isRequired
// }


// useEffect( () => {
//     console.log(movie.name)
// }, [] )