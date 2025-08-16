import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Counter = () => {
  const navigate = useNavigate()

  const [botsCount, setBotsCount] = useState(0)
  const [visitorsCount, setVisitorsCount] = useState(0)
  const [emailsCount, setEmailsCount] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/stats/cz'
  //const apiUrl = 'http://localhost:3013/api/stats/cz'

  const getStats = async () => {
    try {
      const { data } = await axios.get(apiUrl, config)
      setBotsCount(data.bots)
      setVisitorsCount(data.visitors)
      setEmailsCount(data.emails)
    } catch (err) {
      setError('Failed to fetch bot statistics')
      console.error('Error fetching bots:', err)
    }
  }

  // const getVisitors = async () => {
  //   const { data } = await axios.get(
  //     `https://api.pictusweb.com/api/visitors/cesta/counter`,

  //     // `http://localhost:2000/api/visitors/cesta/counter`,

  //     config
  //   )
  //   console.log(data)
  //   setCount(data)
  // }

  return (
    <div className="section5 h-[100vh] text-[25px] p-10 flex flex-col gap-4">
      <button
        onClick={getStats}
        className="border px-2 rounded-xl w-[100%] lg:w-[20%] cursor-pointer"
      >
        Zobraziť počet návštev
      </button>
      {/* {count > 0 && <h1 className="text-[35px] ml-2">Počet návštev: {count}</h1>} */}
      <div className="counter-stats">
        <p>Roboti: {botsCount}</p>
        <p>Emaily: {emailsCount}</p>
        <p>Návštevy: {visitorsCount}</p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="border px-2 rounded-xl w-[100%] lg:w-[20%] cursor-pointer"
      >
        Späť na stránku
      </button>
    </div>
  )
}

export default Counter
