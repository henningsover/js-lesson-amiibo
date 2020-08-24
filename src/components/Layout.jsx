import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout({ children }) {
  return (
    <div>
      <div>
        <h1>Amiibo Shop</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/game-series-list'>Game Series</Link>
        </nav>
      </div>
      {children}
    </div>
  )
}
