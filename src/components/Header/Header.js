import React from 'react'
import styles from './Header.module.css'
const Header = ( { setTitle, title, movieSearch, setmovieInfoList, movieInfoList, movieInfo }) => {

    const onChange = (e) => {
       setTitle(e.target.value)
        console.log(e.target.value)
        
    }
    const onSubmit = (e) => {
        e.preventDefault()
      console.log(`${title} clicked`)
      movieSearch(title)
      setTitle('');

    }
  

  return (
    <div>
    <nav className = {styles.nav}>
       
      <input value ={title} type = 'search' placeholder='enter movie title' className = {styles.searchbar} onChange = {onChange} ></input>
      <button type = 'submit' onClick = {onSubmit} className={styles.searchButton}>Add</button>
      
    </nav>

    <div>
      
    </div>
    </div>
  )
}

export default Header
