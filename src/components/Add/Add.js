import React, {useEffect, useState} from 'react'
import styles from './Add.module.css'
import search from './icons8-search-24.png'

const axios = require('axios');




const Add = ({ watchList, setWatchList, favorites, setFavorites }) => {

  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState([]);
  
  console.log(watchList);

  const addToWatchList = (movie) => {
    const newWatchlist = [...watchList, movie]
    setWatchList(newWatchlist);
  }

  const addToFavorites = (movie) => {
    const newFavorites = [...favorites, movie]
    setFavorites(newFavorites)
  }


  const onChange = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
    movieSearch(title)
    
     
 }




  async function movieSearch(title){
    const movieData = await axios.get(`https://www.omdbapi.com/?apikey=1cd6897e&s=${title}`)
     .then(response => response.data)
     if (movieData.Search) {
     setMovie(movieData.Search)
     }
 }

useEffect(() => {
  movieSearch(title);
}, [title])


  return (
      <div>
        <div className = {styles.letsCenter}>
        <div className = {styles.holder}>
     <div className = {styles.container}>
    <input value ={title} type = 'search' placeholder='Search' className = {styles.searchbar} onChange = {onChange}></input>
    <img src = {search} alt = '' className = {styles.searchIcon}></img>
    </div>
    </div>
  </div>

    {
      movie.map(movie => (
        <div className = {styles.moviecard} >
          <img src = {movie.Poster} alt = {movie.Title}></img>
          <ul className = {styles.movieInfo}>
            
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <div>
            <button onClick = { () => addToWatchList(movie)} className = {styles.button}> Add to Watchlist</button>
            <button onClick={() => addToFavorites(movie)} className = {styles.button}>Add to Favorites</button>
            </div>

            </ul>
      
        </div>
      ))
    }
    </div>
  )
  }


export default Add
