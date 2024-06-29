import React, { useEffect, useState } from 'react'

const Slider = () => {
  const image2 = '/IMG_02.webp'
  const image3 = '/IMG_03.webp'
  const image4 = '/IMG_04.webp'
  const image5 = '/IMG_05.webp'
  const image6 = '/IMG_06.webp'
  const image7 = '/IMG_07.webp'
  const image8 = '/IMG_08.webp'
  const image9 = '/IMG_09.webp'
  const image10 = '/IMG_10.webp'
  const image11 = '/IMG_11.webp'
  const image12 = '/IMG_12.webp'
  const image13 = '/IMG_13.webp'
  const image14 = '/IMG_14.webp'
  const image15 = '/IMG_15.webp'
  const image16 = '/IMG_16.webp'
  const image17 = '/IMG_17.webp'
  const image18 = '/IMG_18.webp'
  const image19 = '/IMG_19.webp'
  const image20 = '/IMG_20.webp'
  const image21 = '/IMG_21.webp'
  const image22 = '/IMG_22.webp'
  const image23 = '/IMG_23.webp'
  const image24 = '/IMG_24.webp'
  const image25 = '/IMG_25.webp'
  const image26 = '/IMG_26.webp'
  const image27 = '/IMG_27.webp'
  const image28 = '/IMG_28.webp'
  const image29 = '/IMG_29.webp'
  const image30 = '/IMG_30.webp'
  const image31 = '/IMG_31.webp'
  const image32 = '/IMG_32.webp'
  const image33 = '/IMG_33.webp'
  const image34 = '/IMG_34.webp'
  const image35 = '/IMG_35.webp'
  const image36 = '/IMG_36.webp'

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
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
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
      {size === 'w-[100%] lg:w-[65%]' && (
        <img
          className='w-[100%] lg:w-[25%] mb-8 lg:mb-0 lg:mr-[35px]'
          src='/IMG_01.webp'
          alt='book-title'
        />
      )}
      <div className='relative'>
        <div className='flex justify-center'>
          <button
            onClick={prevImage}
            className={`text-[55px] absolute top-1/2 transform -translate-y-1/2 -left-12 lg:left-0 ${btnColor} `}
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className={`absolute top-1/2 transform -translate-y-1/2 -right-12 lg:right-4 text-[55px] ${btnColor2}`}
          >
            &gt;
          </button>
          <p
            className={`flex text-[18px] lg:text-[22.5px] absolute top-[102%] lg:top-0 lg:right-[2%] ${progress}`}
          >
            <strong>{currentIndex + 1} / 35</strong>
          </p>
          {size !== 'w-[100%] lg:w-[65%]' && (
            <button
              onClick={close}
              className='text-[#c90927] text-[25px] absolute top-2 right-4'
            >
              X
            </button>
          )}

          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`mx-auto ${size} cursor-pointer`}
            onClick={() => imageSize()}
          />
        </div>
      </div>
    </>
  )
}

export default Slider
