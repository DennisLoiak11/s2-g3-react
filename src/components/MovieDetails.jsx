import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const Fetch = async () => {
            const r = await fetch(`http://www.omdbapi.com/?apikey=2dfa9c57&i=${id}`);
            const data = await r.json();
            setMovie(data);
        };
        Fetch()
    }, [id])

    return (
        <div>
            {movie ? (
                <div className='text-center'>
                    <h1 className='text-light'>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p className='text-light'>{movie.Plot}</p>
                </div>
            ) : (
                <div className="spinner-border text-white mx-auto" role="status"></div>
            )}
        </div>
    )
}

export default MovieDetails;