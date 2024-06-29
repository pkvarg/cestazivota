import React, { useState, useEffect } from 'react'
import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'
import Section05 from './sections/Section05'
import CookieConsent from 'react-cookie-consent'
import axios from 'axios'
import Translation from './Home.json'
import { useStateContext } from './context/StateContext'

const Home = () => {
  const { language } = useStateContext()
  const [content, setContent] = useState({})

  const [cookieAccept, setCookieAccept] = useState(false)

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  })

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsCount = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/visitors/cesta/increase`,
      // `http://localhost:2000/api/visitors/cesta/increase`,
      config
    )
    console.log('vstrs:', data)
  }

  return (
    <>
      <Section01 language={language} />
      <Section02 language={language} />
      <Section03 language={language} />
      <Section04 language={language} />
      <Section05 language={language} />
      <CookieConsent
        location='bottom'
        style={{
          background: '#782777',
          color: '#d7cde6',
          fontSize: '18px',
          textAlign: 'start',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '18px',
          padding: '7px',
          // borderRadius: '25px',
        }}
        buttonText={content.cookiesButton}
        expires={365}
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsCount()
        }}
      >
        {content.cookiesText}
      </CookieConsent>
    </>
  )
}

export default Home
