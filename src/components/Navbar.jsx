import { NavLink } from "react-router-dom";

//La Navbar gestisce i link del menu principale con NavLink di React Router
//se uno dei link corrisponde alla pagina corrente, gli viene dato classe active

 function Navbar(){

    return (
        <div className="navbar">
            <nav>
                <NavLink className="button" to="/">Home</NavLink>
                <NavLink className="button" to="/movies">Film</NavLink>
            </nav>
        </div>
    );
}

export default Navbar