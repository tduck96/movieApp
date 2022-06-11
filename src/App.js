import React, {useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home'
import Add from './components/Add/Add';
import Watchlist from './components/WatchList/Watchlist';
import homeicon from '/Users/thomasduckworth/Documents/movie-list/src/homeicon.png'

const App = () => {

  const [watchList, setWatchList] = useState(JSON.parse(window.localStorage.getItem('watchList')) ?? []);
  const[favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem('movie_favorites')) ?? []);


  useEffect(() => {
    window.localStorage.setItem('watchList', JSON.stringify(watchList))
  }, [watchList]);

  useEffect(() => {
    window.localStorage.setItem('movie_favorites', JSON.stringify(favorites))
  },[favorites])


  return (
    <Router>
      <nav className ='container'>
        <div className = 'home'>
          <Link to ='/' style={{ textDecoration: 'none'}} > Home
          </Link>
          </div>
         <ul className ='nav-list'>
         <li>
      <Link to ='/add' style={{ textDecoration: 'none' }}>Add</Link>
      </li>
      </ul>
      </nav>
      <Routes>
        <Route path ='/' element={<Home 
        favorites ={favorites}
        watchList={watchList}
        setWatchList={setWatchList}
        setFavorites = {setFavorites} />}
        />
        
        <Route path = '/add' element={<Add 
          watchList = {watchList}
          setWatchList= {setWatchList}
          favorites ={favorites}
          setFavorites={setFavorites}

          />} />

        <Route path ='/watchlist' element =
        {<Watchlist 
        watchList = {watchList}
        setWatchList= {setWatchList}
        />} 
        />
      </Routes>

    </Router>
    
  )
}

export default App

