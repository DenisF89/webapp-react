import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import SingleMovie from './pages/SingleMovie'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>                                     
        <Routes>                                                               
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/movies" Component={MovieList} />
            <Route path="/movies/:id" Component={SingleMovie} />
            <Route path="/login" Component={Login} />
            <Route path="*" Component={ErrorPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
