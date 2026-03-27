import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import SingleMovie from './pages/SingleMovie'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
      <BrowserRouter>                                     
        <Routes>                                                               
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/movies" Component={MovieList} />
            <Route path="/movies/:id" Component={SingleMovie} />
            <Route path="*" Component={ErrorPage} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
