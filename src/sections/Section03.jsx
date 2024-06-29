import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'

const Section03 = ({ language }) => {
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
    <div className='section3 px-[5%]'>
      <div className='text-[20.5px] lg:text-[22.5px] text-justify'>
        <p>
          {content.heroText6}
          {/* Boh ťa tak veľmi miluje, že Svojho Syna nechal obetovať za tvoje
          hriechy, pretože */}{' '}
          <span className='italic'>
            {' '}
            {content.heroVerse6}
            {/* bez vyliatia krvi niet odpustenia. */}
          </span>{' '}
          <span className='text-[15px]'>
            {content.heroRef6}
            {/* Hebrejom 9:22 */}
          </span>{' '}
          <span className='italic'>
            {content.heroVerse7}
            {/* Lebo tak Boh miloval svet, že svojho jednorodeného Syna dal, aby
            nezahynul, ale večný život mal každý, kto verí v Neho. */}
          </span>{' '}
          <span className='text-[15px]'>
            {content.heroRef7}
            {/* Ján 3:16 */}
          </span>{' '}
        </p>
      </div>

      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.s3Text1}
          <span className='italic'>
          {content.s3Text1add}
          </span>
         
          <span className='text-[15px]'>{content.s3Text1addRef}</span>{' '}
          {/* Ak sa rozhodneš ignorovať Jeho obeť a šancu na záchranu, budeš
          odsúdený. */}{' '}
          <span className='italic'>
            {content.s3Verse1}
            {/* Kto však neposlúcha Syna, neuvidí život, ale hnev Boží zostáva na
            ňom. */}
          </span>{' '}
          <span className='text-[15px]'>
            {content.s3Ref1}
            {/* Ján 3:36 */}
          </span>{' '}
          <span className='italic'>
            {content.s3Verse2}
            {/* Kto neverí, už je odsúdený, pretože neuveril v meno jednorodeného
            Syna Božieho. */}
          </span>{' '}
          <span className='text-[15px]'>{content.s3Ref2}</span>
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.s3Text2}
          {/* Ver v Pána Ježiša Krista a budeš spasený! */}{' '}
          <span className='italic'>
            {content.s3Verse3}
            {/* Kto verí v Syna, má večný život. */}{' '}
            <span className='text-[15px]'>
              {content.s3Ref3} {/* Ján 3:36 */}
            </span>
            {content.s3Verse4}
            {/* Kto verí v Neho,
            nebude súdený.  */}
            <span className='text-[15px]'>
              {' '}
              {content.s3Ref4} {/* Ján 3:18 */}
            </span>
          </span>
          <span> {content.s3Ref4addText}</span>
          <span className='italic'>{content.s3Ref4addVerse}</span>
          <span className='text-[15px]'>{content.s3Ref4addRef}</span>
          <span className='italic'>
            {' '}
            {content.s3Verse5}
            {/* Ak ústami vyznávaš Pána Ježiša a v srdci veríš, že Ho Boh vzkriesil
            z mŕtvych, budeš spasený; lebo srdcom veríme na spravodlivosť a
            ústami vyznávame na spasenie. */}{' '}
            <span className='text-[15px]'>
              {content.s3Ref5}
              {/* Rimanom 10:9-10 */}
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Section03
