import React from 'react'
import styles from './Watchlist.module.css'

const Watchlist = ({watchList, setWatchList}) => {



 

  return (
    <div>
     <h1>Watchlist</h1> 
     <div className = {styles.container}>
    {
      watchList.map(item => (
        <div className = {styles.card} key = {item.id}>
          <img src = {item.Poster} alt = {item.Title} className = {styles.poster}></img>
          <button onClick = {
            (listItem) => {
              const newList =
              watchList.filter(listItem => listItem.imdbID !== item.imdbID);
              setWatchList(newList)
            }
          }> delete</button>
          </div>
      ))
    }
     
          
     </div>
    </div>
  )
}

export default Watchlist
