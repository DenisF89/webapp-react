import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Review from '../components/Review';

function SingleMovie(){

const {id} = useParams();
const [movie, setMovie] = useState({})

const apiUrl = "http://localhost:3000/movies/";
const imgUrl = "http://localhost:3000/";


useEffect(()=>{
    axios.get(`${apiUrl}${id}`)
    .then(response=>{
        console.log(response.data);
        setMovie(response.data);
    }).catch(err=> console.error(err.message));
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
            <h1>Single Movie</h1>

            <div className="card-title">
                <h2>{movie.title}</h2>
            </div>
            <div className="card-img-top">
                <img src={`${imgUrl}${movie.image}`} alt={movie.image} />
            </div>
            <div className="card-text">
                <p>Regista:{movie.director}</p>
                <p>Genere:{movie.genre}</p>
                <p>Anno:{movie.release_year}</p>
                <p>Trama:{movie.abstract}</p>
                <hr />
            </div>
            <div className="card-reviews">
                {
                    movie.reviews?.map(review => (
                        <div className="col" key={review.id}>
                            <Review review={review}/>
                        </div> )           
                    )
                }
            </div>

        </div>
    );
}

export default SingleMovie