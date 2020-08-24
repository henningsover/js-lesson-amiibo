import React from 'react'
import { Link } from 'react-router-dom'

export default function GameSeriesCard({ gameSeries, image }) {
  const gameseries = gameSeries.replace(/\s/g, '+')

  return (
    <Link to={`/game-series/${gameseries}`} className='game-series-list__card'>
      <img className='game-series-list__card__img' src={image} alt='amiibo' />
      <span>{gameSeries}</span>
    </Link>
  )
}
