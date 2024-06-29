import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import Slider from '../components/Slider'
import SliderEn from '../components/SliderEn'
import ContactForm from '../components/ContactForm'

const Section04 = ({ language }) => {
  const [content, setContent] = useState({})
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  })

  const toggleShowContact = () => {
    setShowContact((prev) => !prev)
  }

  return (
    <div className='section4'>
      <h3 className='text-[22.5px] lg:text-[25px] pt-[75px] text-center mx-[5%] lg:mx-0'>
        {content.s4Text1}
        {/* Viac sa dočítaš v tejto knihe */}
      </h3>
      <div className='lg:mx-[25px] p-[50px] flex flex-col lg:flex-row items-center'>
        {/* <img
          className='w-[100%] lg:w-[25%] mb-8 lg:mb-0 lg:mr-[35px]'
          src='/IMG_01.webp'
          alt='book-title'
        /> */}
        {language === 'slovak' || language === 'czech' ? (
          <Slider />
        ) : (
          <SliderEn />
        )}
      </div>
      <h3 className='text-[20px] lg:text-[22.5px] text-center'>
        {language === 'slovak' && (
          <p>
            Vytlačenú bezplatnú knihu si pýtaj u{' '}
            <button className='underline' onClick={() => toggleShowContact()}>
              mňa
              {/* {content.s4Text2} */}
            </button>
          </p>
        )}
        {language === 'english' && (
          <p>
            Ask{' '}
            <button className='underline' onClick={() => toggleShowContact()}>
              me
            </button>{' '}
            for a printed free book
          </p>
        )}
        {language === 'czech' && (
          <p>
            Vytisknutou bezplatnou knihu si ptej u{' '}
            <button className='underline' onClick={() => toggleShowContact()}>
              mě
            </button>{' '}
          </p>
        )}
        {showContact && (
          <ContactForm language={language} setShowContact={setShowContact} />
        )}
        {/* Vytlačenú bezplatnú knihu si pýtaj u mňa na cestazivota@cestazivota.sk */}
      </h3>
    </div>
  )
}

export default Section04
