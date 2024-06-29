import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import LanguageBar from '../components/LanguageBar'

const Section01 = ({ language }) => {
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
    <div className='hero px-[5%]'>
      <LanguageBar />
      <div className='text-[30px] lg:text-[40px] text-center pt-[12%] lg:pt-[5%]'>
        <h1 className='textgradient'>
          {content.heroTitle}
          {/* Uver pravde, buď oslobodený od hriechu a získaj večný život! */}
        </h1>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-8'>
        <p>
          {content.heroText1}{' '}
          {/* Ak ešte neveríš v Boha, Jeho Syna a Ducha Svätého, prosím uvedom si,
          že svojou neverou nespôsobíš zánik Jeho existencie. Pýcha tvojho ega
          ti nedovoľuje pripustiť, že nie ty vládneš nad svojím životom, ale On
          má všetko pod kontrolou.{' '} */}
          <span className='italic'>
            {content.heroVerse1}{' '}
            {/* Vo svojom srdci blázon hovorí: Niet Boha!{' '} */}
          </span>
          <span className='text-[15px]'>
            {' '}
            {content.heroRef1} {/* Žalmy 14:1 */}
          </span>{' '}
          {content.heroText2}
          {/* Preto daj sebe samému šancu a čítaj ďalej. */}
        </p>
      </div>
      <div className='text-[20px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.heroText3}{' '}
          {/* Boh existuje! Stvorenie samé svedčí o Ňom.{' '} */}
          <span className='italic'>
            {content.heroVerse3}
            {/* Lebo im je zjavné, čo môžu vedieť o Bohu; veď sám Boh im to zjavil.
            Lebo čo je neviditeľné z Neho, Jeho večná moc a božskosť, to od
            stvorenia sveta rozjímaním môžu pozorovať z Jeho diel, takže nemajú
            ospravedlnenie. */}
          </span>{' '}
          <span className='text-[15px]'>
            {content.heroRef3}
            {/* Rimanom 1:19-20 */}
          </span>{' '}
        </p>
      </div>
      <div className='text-[20.5px] lg:text-[22.5px] text-justify mt-6'>
        <p>
          {content.heroText4}
          {/* Boh je láska a tá Ho motivovala stvoriť ľudstvo, takže aj teba, aby
          mal s tebou osobný vzťah. Avšak pádom človeka v raji dedíme hriešnu
          prirodzenosť, ktorá bráni tomuto vzťahu.{' '} */}
          <span className='italic'>
            {' '}
            {content.heroVerse4}
            {/* Všetci totiž zhrešili a nemajú slávy Božej. */}
          </span>
          <span className='text-[15px]'>
            {' '}
            {content.heroRef4}
            {/* Rimanom 3:23 */}
          </span>{' '}
          <span className='italic'>
            {' '}
            {content.heroVerse5}
            {/* Ak hovoríme, že nemáme hriech, sami seba klameme a nie je v nás
            pravda. */}
          </span>{' '}
          <span className='text-[15px]'>
            {' '}
            {content.heroRef5}
            {/* Prvý Jánov 1:8 */}
          </span>{' '}
        </p>
      </div>
    </div>
  )
}

export default Section01
