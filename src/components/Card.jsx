import { Link } from "react-router-dom";

function Card({movie}){

 const {id,title,director,genre,release_year,abstract,image} = movie;

 const imgUrl = "http://localhost:3000/static/movies/";

return(
                <div className="card movie-card">
                    
                        <div className="card-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-img-top">
                            <img src= {`${imgUrl}${image}`} alt={image} />
                        </div>
                        {/* <div className="card-text">
                            <p>Regista:{director}</p>
                            <p>Genere:{genre}</p>
                            <p>Anno:{release_year}</p>
                            <p>Trama:{abstract}</p>
                        </div> */}
                        <Link to={`/movies/${id}`}>Dettagli</Link>
                </div>
    )
}

export default Card