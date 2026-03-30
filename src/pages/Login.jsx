import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Login() {

    const { login,user,logout,isAuth } = useAuth();
    
    const fieldsDefault = {username: "",password: ""};
    const [form, setForm] = useState(fieldsDefault);
    
    const [message, setMessage] = useState("");


    const handleFields = (e) => {
        const{name,value}= e.target; 
        setForm({...form,[name]:value});
    };


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
    <div>

        {!isAuth ? (
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
      <>
      
        <div>
            <h1>Ciao {user.username}</h1>
            <p>Gestisci le recensioni dei film</p>
            
            <button type="button" className="btn btn-outline-secondary mt-3" onClick={(e)=>logout()}>Logout</button>
        </div>
        </>
      )
    }
    </div>
  );
}

export default Login