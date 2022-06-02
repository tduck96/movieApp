import React from 'react'
import Movie from '/Users/thomasduckworth/Documents/movie-list/src/components/Movie/Movie.js'

const Watchlist = ({setWatchList, watchList}) => {
  return (
    <div>
     {
         watchList.map(movie => (
             <Movie
             setWatchList = {setWatchList} 
             key = {movie.id}
             title ={movie.title}
             actors = {movie.actors} 
             plot = {movie.plot}
             rated = {movie.rated}
             year = {movie.year}
             movie = {movie}
             posterSource = {movie.poster}
             />

         ))

     }
    </div>
  )
}

export default Watchlist
