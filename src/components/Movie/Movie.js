import React from 'react'
import styles from './Movie.module.css'

const Movie = ({ title, actors, plot, rated, year, item, posterSource, key, setWatchList, watchList }) => {

 const watchListHandler = (e) => {
   e.preventDefault()
  console.log(e.target.title + "clicked")
 }
  
  return (
    <div className = {styles.container} key = {key}>
      <a href ='/'> <img src = {posterSource} alt = '' className = {styles.poster}></img></a>
      <button onClick = {watchListHandler} >Add to Watchlist</button>
      {/* <h2>  <i>{plot} </i> </h2>
      <p> Title: {title}</p>
      <p>Rated: {rated}</p>
      <p>Cast: {actors}</p>
      <p> Year: {year}</p> */}
      
        
        </div>
    
  )
}

export default Movie
