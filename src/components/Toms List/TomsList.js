import React from 'react'
import Movie from '../Movie/Movie'
import styles from './TomsList.module.css'

const TomsList = ( { tomsInfo }) => {
  return (
    <div className = {styles.tomsContainer} >
      {
          tomsInfo.map(item => (
             <Movie
             key = {item.id}
             title ={item.title}
             actors = {item.actors} 
             plot = {item.plot}
             rated = {item.rated}
             year = {item.year}
             movieitem = {item}
             posterSource = {item.poster} />
          ))
      }
    </div>
  )
}

export default TomsList
