import { Link } from "react-router-dom";

function ErrorPage(){
    return(
        <div>
            <h1>La pagina non esiste</h1>
            <Link className="button" to="/">Torna alla homepage</Link>
        </div>
    );
}

export default ErrorPage