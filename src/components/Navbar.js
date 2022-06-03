import React, {Link} from 'react'

const Navbar = () => {
  return (
    <div>
      <Link to ='/'>Movies</Link>
      <Link to='/watchlist'>Watchlist</Link>
    </div>
  )
}

export default Navbar
