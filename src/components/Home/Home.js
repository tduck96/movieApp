import React from 'react'
import { useState, useEffect} from 'react';
// import TomsList from '../Toms List/TomsList';
 import Watchlist from '../WatchList/Watchlist';
 import styles from './Home.module.css';



const Home = ({favorites, watchList, setWatchList, setFavorites}) => {






return (
  <div className = {styles.homebody}>
    <h1> Favorites</h1>
    <div className={styles.container}>
  {
      favorites.map(item => (
        <div className = {styles.holder}>
          <img src = {item.Poster} alt = {item.Title} className={styles.favoritesposter}></img>
          <button onClick = {
            (listItem) => {
              const newList =
              favorites.filter(listItem => listItem.imdbID !== item.imdbID);
              setFavorites(newList)
            }
          }>delete</button>
          </div>
          
      ))
    }
  </div>
   <Watchlist
   watchList={watchList}
   setWatchList={setWatchList}
    />
  




</div>
)
  
}

export default Home






