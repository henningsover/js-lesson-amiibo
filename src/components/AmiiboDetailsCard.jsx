import React, { useState } from 'react'

export default function AmiiboDetailsCard({ amiiboSeries, character, gameSeries, image, name, release, type }) {


  // const renderReleaseDateList = (() => {
  //   Object.keys(release).forEach((item) => {
  //     return <p>item</p>
  //   })
  // })
  // console.log(release)

  return (
    <div className='details__container'>
      <img src={image} alt={character} />
      <div className='details__container__content'>
        <h2>{name}</h2>
        <table>
          <tbody>
            <tr>
              <th>Game series:</th>
              <td>{gameSeries}</td>
            </tr>
            <tr>
              <th>Amiibo Series:</th>
              <td>{amiiboSeries}</td>
            </tr>
            <tr>
              <th>Character:</th>
              <td>{character}</td>
            </tr>
            <tr>
              <th>Type:</th>
              <td>{type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
