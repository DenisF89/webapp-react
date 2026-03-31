import img from '../assets/home.png';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Webapp React & Express</h1>

            <img src={img} alt="Logo" style={{ width: '400px' }}
      />
        <div className="row mt-4 ms-4 text-start"> 
            <p>Questa applicazione è stata sviluppata utilizzando React per il frontend e Express per il backend.</p>

            <p>Il progetto integra i concetti base dello sviluppo web, tra cui:</p>
        </div>   

            <div className="row small-text">
                <div className="col text-start mt-2 ms-5 p-2 ">
                    <h2>Frontend</h2>
                    <ul>
                        <li>creazione di Componenti React</li>
                        <li>gestione della navigazione multipagina con il Router</li>
                        <li>gestione degli Hooks per gestire State, Eventi, Context</li>
                        <li>creazione di richiesta API tramite axios</li>
                        <li>gestione di un filtro "Cerca" generico su titolo, regista, genere...</li>
                        <li>creazione di una sezione "admin" base con Login per cancellare recensioni</li>
                    </ul>
                    </div>
                    <div className="col text-start mt-2 me-5 p-2">
                    <h2>Backend</h2>
                    <ul>
                        <li>creazione, settaggio e utilizzo di un server Express</li>
                        <li>comunicazione tra frontend e backend tramite API Rest</li>
                        <li>Collegamento del backend con un Database per la Persistenza delle operazioni CRUD</li>
                    </ul>
                </div>
            </div>
            <Link to="/movies" className="btn btn-outline-primary m-2">Vai ai Film</Link>
        </div>
    );
}

export default Home