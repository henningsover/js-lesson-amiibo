import React, { useState, useEffect } from 'react'
import AmiiboCard from './AmiiboCard'


export default function AmiiboList(props) {

  let [amiiboList, setAmiiboList] = useState([])

  const fetchAmiiboList = () => {
    const gameSeries = props.match.params.gameseries
    const gameSeriesCleaned = gameSeries.replace(/\s/g, '+')
    console.log(gameSeriesCleaned)
    fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${gameSeriesCleaned}`)
      .then(res => res.json())
      .then(result => setAmiiboList(result.amiibo))
  }

  useEffect(() => {
    fetchAmiiboList()
  }, [])



  return (
    <div className="game-series-list">
      {
        amiiboList.map((element, index) => {
          return (
            <div>
              <AmiiboCard
                key={index}
                name={element.name}
                character={element.character}
                image={element.image} />
            </div>
          )
        })
      }
      {
        // console.log(amiiboList)
      }
    </div>
  )
}
