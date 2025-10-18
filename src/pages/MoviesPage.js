import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


function MoviePage(){
    const [movies, setMovies] = useState([]);


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
    .then(res=>res.json())
    .then(data=>setMovies(data))
}, []);

return(
    <div style={{padding:'20px'}}>
        <h2>Список фильмов</h2>
        <ul>
            {movies.map(movie=>(
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    </div>
)
};

export default MoviePage;