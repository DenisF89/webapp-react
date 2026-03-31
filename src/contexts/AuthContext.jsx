import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData)); //persistenza nel browser altrimenti al refresh si resetta lo state. Json=>Stringa
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");    //cancella dati del login nel browser altrimenti resta loggato
        navigate('/');
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");   //al caricamento del componente recupero user dal browser se esiste
        if (savedUser) {
            setUser(JSON.parse(savedUser)); //Stringa => JSON
        }
        }, []);

    return (
        <AuthContext.Provider value={{user, login, logout, isAuth: user?.role==='admin'}}>
            {children}
        </AuthContext.Provider>
    );
    //isAuth: !!user   è una variabile che trasforma user in booleano: 
    // user è un oggetto, ! prima negazione user = false, seconda negazione user = true.  Uguale a "user !== null" 
}

function useAuth() {
  return useContext(AuthContext);
}

export {AuthProvider, useAuth}