import React, { useState, useEffect } from 'react'
import GameSeriesCard from './GameSeriesCard'

export default function AmiiboList() {

  let [gameSeries, setGameSeries] = useState([])


  const fetchAmiiboList = () => {
    fetch("https://www.amiiboapi.com/api/amiibo")
      .then(res => res.json())
      .then(result => getGameSeries(result.amiibo))
  }

  useEffect(() => {
    fetchAmiiboList()
  }, [])

  const getGameSeries = (amiiboList) => {

    let gameSeriesNames = []

    let filteredAmiiboList = amiiboList.filter(function (element) {
      const currentGameSeries = element.gameSeries
      let notInArr = true

      if (gameSeriesNames.length === 0) {
        gameSeriesNames.push(currentGameSeries)
      } else {
        for (let i = 0; i < gameSeriesNames.length; i++) {
          if (gameSeriesNames[i] === currentGameSeries) {
            notInArr = false
            break
          }
        }

        if (notInArr) {
          gameSeriesNames.push(currentGameSeries)
        }
      }
      return notInArr
    })

    let gameSeriesArr = filteredAmiiboList.map((element, index) => {
      const gameSeriesObj = {}
      gameSeriesObj.name = element.gameSeries
      gameSeriesObj.image = element.image
      return gameSeriesObj
    })
    setGameSeries(gameSeriesArr)
  }

  return (
    <div className="game-series-list">
      {
        gameSeries.map((element, index) => {
          return (
            <GameSeriesCard
              gameSeries={element.name}
              image={element.image}
              id={index}
              key={index} />
          )
        })
      }
    </div>
  )
}
