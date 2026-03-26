import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../components/Card';




function MovieList(){

/* const movies = [
    {
        id:'1',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'2',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'3',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'4',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    },
        {
        id:'5',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'6',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'7',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
    ,
        {
        id:'8',
        title:'Inception',
        director:'Christopher Nolan',
        genre:'Science Fiction',
        release_year:2010,
        abstract:'A skilled thief is given a chance at redemption if he can successfully perform inception.',
        image:'inception.jpg'
    }
]; */

const [movies, setMovies] = useState([])

const apiUrl = "http://localhost:3000/api/movies";

useEffect(()=>{
    axios.get(apiUrl)
    .then(response=>{
        console.log(response.data);
        setMovies(response.data);
    }).catch(err=> console.error(err.message));
},[]);



    return(
        <div className="movie-list container-fluid">
            <h1 className="page-title">Movie List</h1>
                
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-2">
                
                    {
                        movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <Card movie={movie}/>
                            </div> )           
                        )
                    }
               
            </div>
        </div>
    );
}

export default MovieList