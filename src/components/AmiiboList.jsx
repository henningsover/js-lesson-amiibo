import React, { useState, useEffect } from 'react'
import AmiiboCard from './AmiiboCard'


export default function AmiiboList(props) {

  let [amiiboList, setAmiiboList] = useState([])

  const gameSeries = props.match.params.gameseries
  const gameSeriesTitle = gameSeries.replace(/\+/g, " ")

  const fetchAmiiboList = () => {
    fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${gameSeries}`)
      .then(res => res.json())
      .then(result => setAmiiboList(result.amiibo))
  }

  useEffect(() => {
    fetchAmiiboList()
  }, [])



  return (
    <main>
      <h2 className='game-series-title'>{gameSeriesTitle}</h2>
      <div className="game-series-list">
        {
          amiiboList.map((element, index) => {
            return (
              <div>
                <AmiiboCard
                  key={index}
                  id={element.head + element.tail}
                  name={element.name}
                  character={element.character}
                  image={element.image} />
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
