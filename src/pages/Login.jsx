import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Login() {

    //VARIABILI CONTEXT
    const { login,user,logout,isAuth } = useAuth();        
    //VARIABILI FORM
    const fieldsDefault = {username: "",password: ""};
    const [form, setForm] = useState(fieldsDefault);
    //RESPONSE
    const [message, setMessage] = useState("");

    //FUNCTIONS 
      //CONTROLLED FORM
    const handleFields = (e) => {
        const{name,value}= e.target; 
        setForm({...form,[name]:value});
    };

      //RICHIESTA API
    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = "http://localhost:3000/api/login";
        axios.post(apiUrl,form)
        .then(response =>{
            login(response.data.user)
            setMessage(`Utente ${response.data.user.username} loggato`);
        })
        .catch(err=> {
            const message = err.response?.data?.message || "Login fallito";
            setMessage(message);
        });
  }

  return (
    <>
      {!isAuth ? (      
      
        //SE ADMIN NON E' LOGGATO --> FORM DI LOGIN
      <>
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            autoComplete="username"
            onChange={handleFields}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            autoComplete="current-password"
            onChange={handleFields}
          />

          <button className="btn btn-outline-primary" type="submit">Login</button>
        </form>

        {message && <p>{message}</p>}

      </>

      ):(
        //SE ADMIN E' LOGGATO
      <>
      
        <div>
            <h1>Ciao {user.username}</h1>
            <p><Link to="/movies" className="btn btn-outline-primary">Gestisci le recensioni dei film</Link></p>
            
            <button type="button" className="btn btn-outline-secondary mt-3" onClick={(e)=>logout()}>Logout</button>
        </div>

      </>

      )
    }
    </>
  );
}

export default Login