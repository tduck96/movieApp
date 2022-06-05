import React, {useEffect, useState} from 'react'
import styles from './Add.module.css'
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
 const onSubmit = (e) => {
   e.preventDefault();
   movieSearch(title)
   setTitle('')

 }



  async function movieSearch(title){
    const movieData = await axios.get(`http://www.omdbapi.com/?apikey=1cd6897e&s=${title}`)
     .then(response => response.data)
     if (movieData.Search) {
     setMovie(movieData.Search)
     }
 }

useEffect(() => {
  movieSearch(title);
}, [title])


  return (
      <div >
     <div className = {styles.container}>
       
    <input value ={title} type = 'search' placeholder='enter movie title' className = {styles.searchbar} onChange = {onChange}></input>
    <button type = 'submit' onClick = {onSubmit} className={styles.searchButton}>Search</button>
    </div>

    {
      movie.map(movie => (
        <div className = {styles.moviecard} >
          <img src = {movie.Poster} alt = {movie.Title}></img>
          <ul className = {styles.movieInfo}>
            
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <button onClick = { () => addToWatchList(movie)}> Add to Watchlist</button>
            <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>

            </ul>
      
        </div>
      ))
    }
    </div>
  )
  }


export default Add
