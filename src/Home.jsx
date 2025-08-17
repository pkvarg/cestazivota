import { useState, useEffect } from 'react'
import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'
import Section05 from './sections/Section05'
import ConsentBanner from './components/ConsentBanner'
import axios from 'axios'
import Translation from './Home.json'
import { useStateContext } from './context/StateContext'
import { loadUmamiScript, checkConsentAndLoadAnalytics } from './utils/analytics'

const Home = () => {
  const { language } = useStateContext()
  const [content, setContent] = useState({})


  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
    
    // Check if user has already consented and load analytics
    checkConsentAndLoadAnalytics()
  }, [language])

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/visitors/cz/increase'
  //const apiUrl = 'http://localhost:3013/api/visitors/cz/increase'

  const increaseVisitors = async () => {
    try {
      await axios.put(apiUrl, {}, config)
    } catch (error) {
      console.error('Error tracking declined visitors:', error)
    }
  }

  // const increaseVisitorsCount = async () => {
  //   const { data } = await axios.put(
  //     `https://api.pictusweb.com/api/visitors/cesta/increase`,
  //     // `http://localhost:2000/api/visitors/cesta/increase`,
  //     config
  //   )
  //   console.log('vstrs:', data)
  // }

  return (
    <>
      <Section01 language={language} />
      <Section02 language={language} />
      <Section03 language={language} />
      <Section04 language={language} />
      <Section05 language={language} />
      <ConsentBanner
        text={content.cookiesText}
        buttonText={content.cookiesButton}
        declineText={content.cookiesDecline}
        onAccept={() => {
          loadUmamiScript()
          increaseVisitors()
        }}
        onDecline={() => {
          // Analytics will not be loaded
          increaseVisitors()
        }}
        style={{
          background: '#782777',
          color: '#d7cde6',
          fontSize: '16px',
          textAlign: 'start',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '16px',
          padding: '7px',
        }}
        declineButtonStyle={{
          background: '#666',
          color: '#fff',
          fontSize: '16px',
          padding: '7px',
        }}
      />
    </>
  )
}

export default Home
