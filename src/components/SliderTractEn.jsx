import React, { useEffect, useState } from 'react'

const SliderTractEn = () => {
  const image2 =
    'https://www.chick.com/images/tracts/0001/0001_02.gif?09302022091323'
  const image3 =
    'https://www.chick.com/images/tracts/0001/0001_03.gif?09302022091323'

  const image4 =
    'https://www.chick.com/images/tracts/0001/0001_04.gif?09302022091323'

  const image5 =
    'https://www.chick.com/images/tracts/0001/0001_05.gif?09302022091323'

  const image6 =
    'https://www.chick.com/images/tracts/0001/0001_06.gif?09302022091323'

  const image7 =
    'https://www.chick.com/images/tracts/0001/0001_07.gif?09302022091323'

  const image8 =
    'https://www.chick.com/images/tracts/0001/0001_08.gif?09302022091323'

  const image9 =
    'https://www.chick.com/images/tracts/0001/0001_09.gif?09302022091323'

  const image10 =
    'https://www.chick.com/images/tracts/0001/0001_10.gif?09302022091323'

  const image11 =
    'https://www.chick.com/images/tracts/0001/0001_11.gif?09302022091323'

  const image12 =
    'https://www.chick.com/images/tracts/0001/0001_12.gif?09302022091323'

  const image13 =
    'https://www.chick.com/images/tracts/0001/0001_13.gif?09302022091323'

  const image14 =
    'https://www.chick.com/images/tracts/0001/0001_14.gif?09302022091323'

  const image15 =
    'https://www.chick.com/images/tracts/0001/0001_15.gif?09302022091323'

  const image16 =
    'https://www.chick.com/images/tracts/0001/0001_16.gif?09302022091323'

  const image17 =
    'https://www.chick.com/images/tracts/0001/0001_17.gif?09302022091323'

  const image18 =
    'https://www.chick.com/images/tracts/0001/0001_18.gif?09302022091323'

  const image19 =
    'https://www.chick.com/images/tracts/0001/0001_19.gif?09302022091323'

  const image20 =
    'https://www.chick.com/images/tracts/0001/0001_20.gif?09302022091323'

  const image21 =
    'https://www.chick.com/images/tracts/0001/0001_21.gif?09302022091323'

  const image22 =
    'https://www.chick.com/images/tracts/0001/0001_22.gif?09302022091323'

  const image23 = '/tractEnd.webp'

  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
  ]

  const [size, setSize] = useState('w-[100%] lg:w-[65%]')
  const [btnColor, setBtnColor] = useState('')
  const [btnColor2, setBtnColor2] = useState('')
  const [progress, setProgress] = useState('-top-2')

  const [windowWidth, setWindowWidth] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const imageSize = () => {
    if (windowWidth > 900) {
      setSize('w-[550%]')
      setBtnColor('text-[#000000] ')
      setBtnColor2('text-[#000000]')
      setProgress('bg-[#c3c7d7] top-[52%] text-[#000000]')
    }
  }

  const close = () => {
    setSize('w-[100%] lg:w-[65%]')
    setBtnColor('')
    setBtnColor2('')
    setProgress('')
  }

  useEffect(() => {
    const width = window.innerWidth
    setWindowWidth(width)
  }, [windowWidth])

  return (
    <>
      <div className='relative my-16'>
        <div className='hidden lg:flex justify-center'>
          <button
            onClick={prevImage}
            className={`text-[55px] absolute top-1/2 transform -translate-y-1/2 -left-12 lg:left-20 ${btnColor} `}
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className={`absolute top-1/2 transform -translate-y-1/2 -right-12 lg:right-24 text-[55px] ${btnColor2}`}
          >
            &gt;
          </button>
          <p
            className={`hidden lg:flex text-[22.5px]  absolute ${progress}  right-[2%]`}
          >
            <strong>{currentIndex + 1} / 22</strong>
          </p>
          {/* {size !== 'w-[100%] lg:w-[65%]' && (
            <button
              onClick={close}
              className='text-[#c90927] text-[25px] absolute top-2 right-4'
            >
              X
            </button>
          )} */}

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`mx-auto ${size} cursor-pointer`}
            // onClick={() => imageSize()}
          />
        </div>
        <div className='flex lg:hidden justify-center'>
          <button
            onClick={prevImage}
            className={`text-[35px] absolute top-[115%] transform -translate-y-1/2 left-12 ${btnColor} `}
          >
            &lt;
          </button>
          <p
            className={`flex text-[18px] lg:text-[22.5px]  absolute ${progress} top-[108%]`}
          >
            <strong>{currentIndex + 1} / 22</strong>
          </p>
          <button
            onClick={nextImage}
            className={`absolute top-[115%] transform -translate-y-1/2 right-12 text-[35px] ${btnColor2}`}
          >
            &gt;
          </button>

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`mx-auto ${size} cursor-pointer`}
          />
        </div>
      </div>
    </>
  )
}

export default SliderTractEn
