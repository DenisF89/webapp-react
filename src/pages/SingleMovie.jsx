import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Review from '../components/Review';
import Form from '../components/Form';

function SingleMovie(){

const {id} = useParams();
const [movie, setMovie] = useState({})

const apiUrl = "http://localhost:3000/api/movies/";
const imgUrl = "http://localhost:3000/static/movies/";

const getMovies = ()=>{
    axios.get(`${apiUrl}${id}`)
    .then(response=>{
        console.log(response.data);
        setMovie(response.data);
    }).catch(err=> console.error(err.message));
}

useEffect(()=>{
    getMovies()
},[id]);


    return(
    <> 
        <div className="card">
            <div className="row g-0">
                <div className="col-5 p-3">
                    <img className="card-img" src={`${imgUrl}${movie.image}`} alt={movie.image} />
                </div>
                <div className="col-7">
                    <div className="card-title">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="card-text text-start p-5">
                        <div className="row mb-2">
                            <div className="col-3">Regista:</div>
                            <div className="col">{movie.director}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">Genere:</div>
                            <div className="col">{movie.genre}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">Anno:</div>
                            <div className="col">{movie.release_year}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">Trama:</div>
                            <div className="col">{movie.abstract}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-3">Voto:</div>
                            <div className="col">{movie.average_vote}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <h2 className="m-3">Recensioni</h2>

        <div className="row row-cols-1 row-cols-md-3 g-2 m-2 align-items-stretch ">
            
            {
                movie.reviews?.map(review => (
                    <div className="col" key={review.id}>
                        <Review review={review}/>
                    </div> )           
                )
            }
        </div>

        <div className="row m-4">
            <Form url={apiUrl} id={id} func = {getMovies} />
        </div>

    </>
    );
}

export default SingleMovie