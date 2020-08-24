import React from 'react'
import { Link } from 'react-router-dom'

export default function AmiiboCard({ name, image, character }) {
  return (
    <div>
      <Link to='/' className='game-series-list__card'>
        <h5>Amibo name: {name}</h5>
        <span>Character: {character}</span>
        <img className='game-series-list__card__img' src={image} alt='Amiibo' />
      </Link>
    </div>
  )
}
