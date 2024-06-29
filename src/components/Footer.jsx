import React from 'react'

const Footer = ({ language }) => {
  return (
    <div className='text-center  text-[20px] pt-[95px] pb-[25px]'>
      <div className='flex flex-col lg:flex-row justify-center gap-0 lg:gap-2 pt-4 mb-8'>
        {language === 'slovak' || language === 'czech' ? (
          <>
            {/* <a href='https://hladamboha.sk' target='_blank'>
              hladamboha.sk
            </a>{' '} */}
            {/* <span className='hidden lg:block'>|</span> */}
            <a href='https://fireproduction.sk' target='_blank'>
              fireproduction.sk
            </a>{' '}
          </>
        ) : (
          <a href='https://fireproduction.sk' target='_blank'>
            fireproduction.sk
          </a>
        )}
        {/* <span className='hidden lg:block'>|</span>
        <a href='https://radio7.sk' target='_blank'>
          Rádio 7
        </a> */}
      </div>

      <a
        href='https://www.pictusweb.sk'
        target='_blank'
        rel='noreferrer'
        className='text-center !text-[#47464a]'
      >
        &#60;&#47;&#62; PICTUSWEB Development
      </a>
    </div>
  )
}

export default Footer
