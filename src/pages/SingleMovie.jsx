//HOOKS
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//LIBRERIE
import axios from 'axios';
//COMPONENTI
import Review from '../components/Review';
import Form from '../components/Form';

function SingleMovie(){

    //VARIABILI
    const {id} = useParams();                   //recupero id movie dall'url
    const [movie, setMovie] = useState({})      //state in cui salvare l'oggetto movie

    const navigate = useNavigate();             //inzializzo la navigazione programmatica

    const apiUrl = "http://localhost:3000/api/movies/";
    const imgUrl = "http://localhost:3000/static/movies/";

    //FUNZIONE DI CHIAMATA AL SERVER
    const getMovies = ()=>{
        axios.get(`${apiUrl}${id}`)                 //richiesta al server url+id (show)
        .then(response=>{
            setMovie(response.data);                //risultato status 200 data contiene i dati della risposta del server (oggetto movie)
        }).catch(err=> {console.error(err.message)  //risultato errore 404,500 ecc.. messaggio errore in console
                        navigate('/error');         //naviga verso pagina non esistente
                        });
    }

    //TRIGGER DI CHIAMATA
    useEffect(()=>{        //manda la richiesta axios al caricamento della pagina e ogni volta che const id cambia (cambio pagina)
        getMovies()
    },[id]);


    return(
    <> 
        {/* MOVIE */}
        <div className="single-movie-hero">
            <div className="row g-0">

                <div className="col-5 p-3 poster">
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

        {/* LISTA RECENSIONI */} 
        <h2 className="m-3">Recensioni</h2>

        <div className="row row-cols-1 row-cols-md-3 g-2 m-2 align-items-stretch ">
            
            {
                movie.reviews?.map(review => (
                    <div className="col" key={review.id}>

                        <Review review={review} func={getMovies}/>      

                    </div> )           
                )
            }
        </div>

        {/* FORM DI INSERIMENTO NUOVA RECENSIONE */}
        <div className="row mt-4">

            <Form url={apiUrl} id={id} func = {getMovies} />

        </div>
    </>
    );
}

export default SingleMovie