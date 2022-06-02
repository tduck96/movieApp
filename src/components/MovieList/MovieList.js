import React from 'react'
import Movie from '/Users/thomasduckworth/Documents/movie-list/src/components/Movie/Movie.js'
import styles from './MovieList.module.css';

const MovieList = ({ movieInfo }) => {
    
  return (
    <div className = {styles.container}>
      {
          movieInfo.map(item => (
            <Movie
            key = {item.id}
            title ={item.title}
            actors = {item.actors} 
            plot = {item.plot}
            rated = {item.rated}
            year = {item.year}
            movieitem = {item}
            posterSource = {item.poster}
            />  

          ))
      }
    </div>
  )
}

export default MovieList
