import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout({ children }) {
  return (
    <div>
      <div className='header'>
        <div className="header__wrapper">
          <div className='logotype'>
            <div className='logotype__center'>
              <h1>Amiibo Shop</h1>
            </div>
          </div>
          <nav className='header__wrapper__nav'>
            <Link className='header__wrapper__nav__item' to='/'>Home</Link>
            <Link className='header__wrapper__nav__item' to='/game-series-list'>Game Series</Link>
          </nav>
        </div>
      </div>
      {children}
    </div>
  )
}
