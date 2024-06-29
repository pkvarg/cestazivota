import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import Footer from '../components/Footer'
import SliderTract from '../components/SliderTract'
import SliderTractEn from '../components/SliderTractEn'
import SliderTractCz from '../components/SliderTractCz'

const Section05 = ({ language }) => {
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
    <div className='section5 text-[20px] lg:text-[22.5px] text-justify pt-[80px]'>
      <div className='text-[20px] lg:text-[22.5px] text-justify mx-[5%]'>
        <p>
          {content.s3Text3}
          {/* Evanjelium neznamená “Uver, inak pôjdeš do pekla!”, ale ”Uver, lebo
          tam smeruješ!” */}{' '}
          <span className='italic'>
            {content.s3Verse6}
            {/* Povedz im: Akože žijem - znie výrok Hospodina, Pána - nemám záľubu v
            smrti bezbožného, ale v tom, že sa bezbožný odvráti od svojho
            spôsobu života a bude žiť. */}{' '}
          </span>
          <span className='text-[15px] italic'>
            {content.s3Ref6}
            {/* Ezechiel 33:11 */}
          </span>
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6 mx-[5%]'>
        <p>
          {content.s3Text4}
          {/* Kajaj sa zo svojich hriechov a úprimne zo srdca ústami vyznaj:
          “Nebeský Otče, ďakujem Ti, že si poslal Svojho Syna, aby niesol trest
          za moje hriechy. Verím, že Ježiš zomrel na kríži a tretí deň vstal z
          mŕtvych a žije. Vzdávam sa doterajšieho hriešneho spôsobu života.
          Prosím, odpusť mi všetky hriechy skrze krv Ježiša Krista. Ďakujem Ti,
          že si ma očistil. Ježišu, vyznávam Ťa ako môjho Pána a Spasiteľa.
          Prosím, meň moje srdce a formuj môj charakter. Amen.”{' '} */}
        </p>
      </div>
      <div className='mx-[5%] mt-6'>
        <p>
          {content.s5Text1} {content.s5Anchor1} {content.s5Text2}{' '}
          {content.s5Anchor2}{' '}
          {/* , aby si udržiaval živý vzťah s Bohom a čítať{' '} */}
          {/* {language === 'slovak' && (
            <a
              className='underline'
              href='https://www.bible.com/cs/bible/509/GEN.1.CSP'
              target='_blank'
            >
              {content.s5Anchor2}
             
            </a>
            
          )} */}
          {/* {language === 'english' && (
            <a
              className='underline'
              href='https://www.bible.com/bible/1588/JHN.1.AMP'
              target='_blank'
            >
              {content.s5Anchor2}
            </a>
          )}{' '} */}
          {/* {language === 'czech' && (
            <a
              className='underline'
              href='https://www.bible.com/cs/bible/509/GEN.1.CSP'
              target='_blank'
            >
              {content.s5Anchor2}
            </a>
          )}{' '} */}
          {content.s5Text3}
          {/* , aby si bol plný Jeho Slova a podľa Neho žil. A pravidelne navštevuj
          nejaké spoločenstvo, kde oslavujú Boha Otca, Ježiša a Svätého Ducha. */}
        </p>

        {/* <p className='pt-4 text-center'>
          Viac v tejto audio knihe{' '}
          <a
            className='underline'
            href='https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3'
            target='_blank'
          >
            Ži s perspektívou večnosti
          </a>
          , 5. kapitola.
        </p> */}
        {language === 'slovak' && <SliderTract />}
        {language === 'english' && <SliderTractEn />}
        {language === 'czech' && <SliderTractCz />}

        <p className='text-justify pt-2'>
          {content.s5Text4}
          {/* Prečo nestačí len formálne uveriť a ďalej to neriešiť? Pretože viera
          bez osobného vzťahu s Ježišom a bez poslušnosti Božiemu Slovu je
          pokrytectvom. Takú falošnú vieru Boh neprijme a odsúdi. Mŕtva viera ťa
          nespasí! Pánom ti je ten, koho poslúchaš. */}
        </p>
        <p className='mt-6'>
          {content.s5Text4a}
          <span className='italic'>
            {' '}
            {content.s5Verse1}{' '}
            {/* Kto hovorí: Poznám Ho, ale nezachováva Jeho prikázania, je klamár a
            niet v ňom pravdy. Ak niekto miluje svet (žiadosť tela, žiadosť očí,
            pýchu života), nieto v ňom lásky k Otcovi.{' '} */}
          </span>
          <span className='text-[15px]'>
            {' '}
            {content.s5Ref1} {/* Prvý Jánov 2:4,15 */}
          </span>
          {content.s5Text5} {/* Viac v tejto audio knihe{' '} */}
          {language === 'slovak' && (
            <a
              className='underline'
              href='https://app.messengerx.com/sk-SK/listen/1DB0tFrLRez7blmTBmVSlZ/qo21vqS1ZFttSJR05ydGL_s3AudioAsset.mp3'
              target='_blank'
            >
              {content.s5Anchor3}
              {/* Ži s perspektívou večnosti */}
            </a>
          )}
          {language === 'english' && (
            <a
              className='underline'
              href='https://app.messengerx.com/en-US/listen/1DB0tFrLRez7blmTBmVSlZ/2EmIAHWSQhehq3XvBHF7vs_s3AudioAsset.mp3'
              target='_blank'
            >
              {content.s5Anchor3}
              {/* Ži s perspektívou večnosti */}
            </a>
          )}
          {language === 'czech' && (
            <a
              className='underline'
              href='https://app.messengerx.com/cs-CZ/listen/1DB0tFrLRez7blmTBmVSlZ/5chmIMhcyC5HdnNKxBrB0v_s3AudioAsset.mp3'
              target='_blank'
            >
              {content.s5Anchor3}
              {/* Ži s perspektívou večnosti */}
            </a>
          )}
          <span className='text-[15px]'>
            {' '}
            {content.s5Text6}
            {/* 5. kapitola. */}
          </span>
        </p>
        <p className='mt-6'>
          {' '}
          {content.s5Text7}{' '}
          {/* Sú všetky cirkevné tradície podložené Božím Slovom? Viac na{' '} */}
          <a
            href='https://katolickaviera.sk'
            target='_blank'
            className='underline'
          >
            {' '}
            {content.s5Anchor4}
            {/* katolickaviera.sk. */}
          </a>
          {'  '}
          {content.s5Text8}{' '}
          {/* Hlásajú svedkovia Jehovovi evanjelium, aké hlásali apoštoli? Viac na{' '} */}
          <a href='https://svedkovia.sk' target='_blank' className='underline'>
            {content.s5Anchor5}
            {/* svedkovia.sk. */}
          </a>{' '}
          {content.s5Text9}{' '}
          {/* Je emocionálne uspokojenie cesta k pravému šťastiu človeka? Viac na{' '} */}{' '}
          <a href='https://duhovyrod.sk' target='_blank' className='underline'>
            {content.s5Anchor6}
            {/* duhovyrod.sk. */}
          </a>
        </p>

        <p className='text-center pt-8 lg:pt-8'>
          {content.s5Text10}
          {/* Prajem ti, aby si uveril pravde, ktorou je Božie Slovo a získal tak
          späť postavenie, ktoré ti patrí. */}
        </p>
      </div>

      <Footer language={language} />
    </div>
  )
}

export default Section05
