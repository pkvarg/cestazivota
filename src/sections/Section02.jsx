import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import YouTube from '../components/YouTube'

const Section02 = ({ language }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  })

  return (
    <div className='section2 pt-[15%] lg:pt-[6%]'>
      <h3 className='text-[25px] lg:text-[30px]  text-center'>
        {content.s2Title}
        {/* Svedectvo môjho kamaráta Jimmyho Synovca */}
      </h3>
      <div className='mt-[5%] pb-[10%] lg:pb-[5%]'>
        <YouTube embedId='5CWjZWyBNjc' />
      </div>
    </div>
  )
}

export default Section02
