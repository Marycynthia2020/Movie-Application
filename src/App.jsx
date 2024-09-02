import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Series from './Series/Series'
import Movies from './Movies/Movies'
import Pages from './Pages/Pages'
import Pricing from './Pricing/Pricing'
import Contact from './Contact/Contact'
import Notfound from './Notfound'
import Nav from './Nav/Nav'
import MovieDetails from './MovieDetailsPage/MovieDetails'

function App() {

  return (
    <div>
    <Nav />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/series" element = {<Series />} />
      <Route path = "/movies" element = {<Home />} />
      <Route path = "/pages" element = {<Home />} />
      <Route path = "/pricing" element = {<Home />} />
      <Route path = "/contact" element = {<Home />} />
      <Route path="/moviedetails/:id" element= {<MovieDetails/>} exact/>
      <Route path = "*" element = {<Notfound />} />
    </Routes>
    </div>
  )
}

export default App