import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Harry() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const Fetch = async () => {
            const r = await fetch('http://www.omdbapi.com/?apikey=2dfa9c57&s=harry%20potter');
            const data = await r.json();
            setData(data.Search);
        };
        Fetch()
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center px-1">
                {data ? (
                    data.slice(0, 6).map((HarryPotter) => (
                        <div key={HarryPotter.imdbID} className="col mb-2 px-2">
                            <img className="img-fluid" src={HarryPotter.Poster} alt={HarryPotter.Title} style={{ width: '235px', height: '300px' }} />
                            <Link to={`/MovieDetails/${HarryPotter.imdbID}`}><Button variant="success">More</Button></Link>
                        </div>
                    ))
                ) : (
                    <div className="spinner-border text-white mx-auto" role="status">
                    </div>
                )}
            </div>

        </>
    )
}


export default Harry;