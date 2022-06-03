import { useState, useEffect, BrowserRouter as Router, Routes, Route, Link } from 'react';
import { v4 as uuidv4} from 'uuid';
import './App.css';
import Header from './components/Header/Header'
import MovieList from './components/MovieList/MovieList';
import TomsList from './components/Toms List/TomsList';
import Watchlist from './components/WatchList/Watchlist';
import Navbar from './components/Navbar';


const axios = require('axios');

function App() {

  const [title, setTitle] = useState('');
  const[movieInfo, setmovieInfo] = useState([]);
  const[movieInfoList, setmovieInfoList] = useState([]);
  const[tomsInfo, settomsInfo] = useState([]);
  const[watchList, setWatchlist] = useState([]);
  
  async function movieSearch(title){
     const movieData = await axios.get(`http://www.omdbapi.com/?apikey=1cd6897e&t=${title}`)
      .then(response => response.data)
      console.log(movieData)
      
     setmovieInfo([
       ...movieInfo , {
        title : movieData.Title,
        plot : movieData.Plot,
        year : movieData.Year,
        rated: movieData.Rated,
        actors: movieData.Actors,
        poster: movieData.Poster,
        id : uuidv4()
       }
     ])
  
  }

  useEffect(() => {
settomsInfo(
 [
{ actors: "Michael C. Hall, Jennifer Carpenter, David Zayas",
id: "c77ec010-5fe4-4823-8592-73518de41ee8",
plot: "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them. Golden Globe winner Michael C. Hall stars in the hit SHOWTIME Original Series.",
poster: "https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg",
rated: "TV-MA",
title: "Dexter",
year: "2006–2013" }, 

{

title:"Orphan Black",
plot:"A streetwise hustler is pulled into a compelling conspiracy after witnessing the suicide of a girl who looks just like her.",
year: "2013–2017",
rated:"TV-MA",
actors: "Tatiana Maslany, Dylan Bruce, Jordan Gavaris",
poster:"https://m.media-amazon.com/images/M/MV5BZjM1ZTVlMGYtNjVkZS00OGMzLWFjMmYtYTE3NjJhZDRlODY3XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
id :"2eaf5399-94e2-40b8-9929-7fda5d887a01"
}])

  } , [] );


  async function tomsSearch(title){
  

    const movieData = await axios.get(`http://www.omdbapi.com/?apikey=1cd6897e&t=${title}`)
     .then(response => response.data)
     console.log(movieData)


    settomsInfo([
      ...tomsInfo , {
       title : movieData.Title,
       plot : movieData.Plot,
       year : movieData.Year,
       rated: movieData.Rated,
       actors: movieData.Actors,
       poster: movieData.Poster,
       id : uuidv4()
      }
    ])
  
 }

 console.log(tomsInfo);
  
  return (
    <div>
    
  <Header 
  setTitle = {setTitle}
  title={title} 
  movieSearch = {movieSearch}
  movieInfoList = {movieInfoList}
  setmovieInfoList = {setmovieInfoList}
  movieInfo = {movieInfo}/>

<h1> Recently Viewed </h1>

<MovieList 
movieInfo = {movieInfo}
/> 

<h1> Tom's Favorites</h1>
 
  <TomsList
  tomsInfo = {tomsInfo} />


 
  </div>
  )
}

export default App;
