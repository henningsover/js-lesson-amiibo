import React, { useState, useEffect } from 'react'
import AmiiboDetailsCard from '../components/AmiiboDetailsCard'

export default function AmiiboDetailsPage(props) {

  let [amiibo, setAmiibo] = useState({})
  let [releaseList, setReleaseList] = useState({})

  const id = props.match.params.id

  const fetchAmiibo = () => {
    fetch(`https://www.amiiboapi.com/api/amiibo/?id=${id}`)
      .then(res => res.json())
      .then(result => setAmiibo(result.amiibo))
  }
  useEffect(() => {
    fetchAmiibo()
  }, [])

  return (
    <div className='details'>
      <AmiiboDetailsCard
        amiiboSeries={amiibo.amiiboSeries}
        character={amiibo.character}
        gameSeries={amiibo.gameSeries}
        image={amiibo.image}
        name={amiibo.name}
        release={amiibo.release}
        type={amiibo.type}
      />
    </div>
  )
}
