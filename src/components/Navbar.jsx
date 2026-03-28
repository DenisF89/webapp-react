import { NavLink, useNavigate  } from "react-router-dom";
import { useState } from "react";

 function Navbar(){

    const [search,setSearch] = useState("");
    const navigate = useNavigate();

    const searchMovie = (e)=>{
        e.preventDefault();  

         navigate(`/movies?search=${encodeURIComponent(search)}`);
    
    }


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
        
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">Film</NavLink>
                    </li>
                </ul>
                <form onSubmit={searchMovie} className="d-flex w-50" role="search">
                    <input className="form-control me-2 flex-grow-1" type="search" placeholder="Cerca per titolo, regista, genere, anno" aria-label="Search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button className="btn btn-outline-success" type="submit">Cerca</button>
                </form>
                </div>
            </div>
            </nav>
            </>
    );
}

export default Navbar