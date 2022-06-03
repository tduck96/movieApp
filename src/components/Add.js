import React from 'react'

const Add = () => {
  return (
    <div>
      <input value ={title} type = 'search' placeholder='enter movie title' className = {styles.searchbar} onChange = {onChange} ></input>
      <button type = 'submit' onClick = {onSubmit} className={styles.searchButton}>Search</button>
    </div>
  )
}

export default Add
