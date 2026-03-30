import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);


    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout, isAuth: !!user}}>
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