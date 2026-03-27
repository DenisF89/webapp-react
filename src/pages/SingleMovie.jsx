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


/* const reviews = [
    {
        id:'1',
        name:'Marco',
        vote:4,
        text:'Lorem Ipsum',
    },
        {
        id:'2',
        name:'Marco',
        vote:4,
        text:'Lorem Ipsum',
    },
        {
        id:'3',
        name:'Marco',
        vote:4,
        text:'Lorem Ipsum',
    },
        {
        id:'4',
        name:'Marco',
        vote:4,
        text:'Lorem Ipsum',
    },
        {
        id:'5',
        name:'Marco',
        vote:4,
        text:'Lorem Ipsum',
    }
]; */

    return(
        <div>
            

            
        <div className="card">
            <div className="row g-0">
                <div className="col-5 p-3">
                    <img className="card-img" src={`${imgUrl}${movie.image}`} alt={movie.image} />
                </div>
                <div className="col-7">
                    <div className="card-title">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="card-text">
                        <p>Regista:{movie.director}</p>
                        <p>Genere:{movie.genre}</p>
                        <p>Anno:{movie.release_year}</p>
                        <p>Trama:{movie.abstract}</p>
                        <p>Voto: {movie.average_vote}</p>
                    </div>
                </div>
            </div>
        </div>

            <div className="row row-cols-1 row-cols-md-3 g-2">
                
                {
                    movie.reviews?.map(review => (
                        <div className="col" key={review.id}>
                            <Review review={review}/>
                        </div> )           
                    )
                }
            </div>
            <div>
                <Form url={apiUrl} id={id} func = {getMovies} />
            </div>

        </div>
    );
}

export default SingleMovie