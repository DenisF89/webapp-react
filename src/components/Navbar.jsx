import { NavLink, useNavigate  } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

 function Navbar(){

    const [search,setSearch] = useState("");        //salva valori del filtro - controlled form
    const navigate = useNavigate();
    const {user} = useAuth();                       //context d'autenticazione  Login o Nome 

    const searchMovie = (e)=>{
        e.preventDefault();  

        //passo il parametro search all'url che poi viene letto da SingleMovie con useParams
         navigate(`/movies?search=${encodeURIComponent(search)}`); //encodeURIComponent codifica per url valido
    }


    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* MENU NAVIGAZIONE */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Film</NavLink>
                        </li>
                    </ul>

                    {/* FILTRO SEARCH */}
                    <form onSubmit={searchMovie} className="d-flex w-50" role="search">
                        <input className="form-control me-2 flex-grow-1" type="search" placeholder="Cerca per titolo, regista, genere, anno" aria-label="Search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        <button className="btn btn-outline-success" type="submit">Cerca</button>
                    </form>

                    {/* LOGIN */}
                    <NavLink className="nav-link usericon" to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>
                    </NavLink>
                    <span className="user"> { user ? user.username : "Login"}</span>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar