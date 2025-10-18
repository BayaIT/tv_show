import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(){
    
    const {id} = useParams(); // получим id из URL
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data)=> setMovie(data));
    }, [id]);

    if(!movie) return <p>Загрузка......</p>

    return(
        <div style={{padding: '20px'}}>
            <h2>{movie.title}</h2>
            <p>{movie.body}</p>
            <p><b>ID фильма:</b>{movie.id}</p>
        </div>
    );
}

export default Detail;