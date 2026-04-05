//HOOKS
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
//LIBRERIE
import axios from "axios";
//COMPONENTI 
import Card from '../components/Card';

function MovieList(){

    //VARIABILI
    const [movies, setMovies] = useState([])            //State in cui salvare lista movies
    const [searchParams] = useSearchParams();           
    const search = searchParams.get("search") || "";    //recupero parametri di query string passati dal form di ricerca nella navbar

    const apiUrl = "http://localhost:3000/api/movies";

    //RICHIESTA AL SERVER 
    useEffect(()=>{
        axios.get(apiUrl,{params:{search:search}})      //richiesta tipo Index con eventuale query params search (api/movies?search=stringa)
        .then(response=>{
            setMovies(response.data);
        }).catch(err=> console.error(err.message));
    },[search]);                                        //ripeti richiesta ogni volta che il filtro (query string) cambia



    return(
        <div className="movie-list container-fluid">
            <h1 className="page-title">Movie List</h1>
                
            <div className="row row-cols-1 row-cols-md-3 g-2">
                
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