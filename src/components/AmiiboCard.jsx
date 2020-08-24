import React from 'react'
import { Link } from 'react-router-dom'

export default function AmiiboCard({ id, name, image, character }) {
  return (
    <div>
      <Link to={`/amiibo-details/${id}`} className='game-series-list__card'>
        <img className='game-series-list__card__img' src={image} alt='Amiibo' />
        <h5>Amibo name: {name}</h5>
        <span>Character: {character}</span>
      </Link>
    </div>
  )
}
