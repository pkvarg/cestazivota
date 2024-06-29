import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Message from '../components/Message'
import Translation from '../Home.json'
import { useStateContext } from '../context/StateContext'
import axios from 'axios'

const ContactForm = ({ language, setShowContact }) => {
  const { botsCount, setBotsCount } = useStateContext()
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  }, [language])

  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [email, setEmail] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)
  const [showGdpr, setShowGdpr] = useState(false)

  const toggleShowGdpr = (e) => {
    e.preventDefault()
    setShowGdpr((prev) => !prev)
  }

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseBots = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/bots/increase`,
      // `http://localhost:2000/api/bots/increase`,

      config
    )
    setBotsCount(data)
    console.log('ctc:', data)
  }

  const closeContact = () => {
    setShowContact(false)
    setShowGdpr(false)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage(content.contactError)
      setEmail('')
      setMailMessage('')
      // increaseBots()

      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess(content.contactSuccess)
            setTimeout(closeContact, 9000)

            console.log('message sent')
          },
          (error) => {
            console.log(error.text)
            setMessageSuccess(content.contactError2)
            setTimeout(closeContact, 9000)
          }
        )

      setEmail('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // } else {
    //   console.log('sending...')
    //   setMessage('Whatever')
    //   const element = document.getElementById('contact')
    //   element.scrollIntoView({ behavior: 'smooth' })
    //   setTimeout(closeContact, 9000)
    // }
  }

  return (
    <>
      <div className='relative pt-5 lg:pt-10' id='contact'>
        <div className='mx-4 md:mx-6 lg:mx-0 flex lg:flex-row flex-col lg:justify-center text-white lg:py-[50px]'>
          <div className='pt-[50px] lg:pt-0'>
            {messageSuccess && (
              <Message variant='success'>{messageSuccess}</Message>
            )}
            {message && <Message variant='danger'>{message}</Message>}
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='flex flex-col gap-[2.5px] text-[22.5px]'
              >
                <div className='flex flex-col justify-center'>
                  <label className='form-label my-[2.5%] text-left'>
                    {content.contactEmail}
                  </label>
                  <input
                    className='form-control rounded-xl'
                    type='email'
                    name='user_email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required='required'
                  />
                  <label className='form-label my-[2.5%] text-left'>
                    {content.contactMessage}
                  </label>
                  <textarea
                    className='form-control rounded-xl'
                    rows='5'
                    name='message'
                    value={mailMessage}
                    onChange={(e) => setMailMessage(e.target.value)}
                    required='required'
                  ></textarea>
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-row items-center form-check mt-8'>
                    <input
                      id='flexCheckDefault'
                      type='checkbox'
                      defaultChecked={false}
                      value={checkBox}
                      onChange={handleCheckBox}
                      required='required'
                      className='rounded-xl w-[25px] h-[25px] lg:h-[30px]'
                    />

                    <label
                      className='form-check-label text-left  text-[22.5] lg:text-[20px] ml-[15px]'
                      htmlFor='flexCheckDefault'
                    >
                      {content.contactAgree}{' '}
                      <button
                        className='underline'
                        onClick={(e) => toggleShowGdpr(e)}
                      >
                        {content.contactGdpr}{' '}
                      </button>
                      {showGdpr && (
                        <p className='w-[300px] lg:w-[330px] text-[20px] text-left'>
                          {content.gdpr1} <br /> {content.gdpr2}
                        </p>
                      )}
                    </label>
                  </div>
                </div>
                <input
                  className='form-control hidden'
                  type='text'
                  defaultValue={passwordGroupOne}
                  onChange={(e) => setPasswordGroupOne(e.target.value)}
                />
                <input
                  className='form-control hidden'
                  type='text'
                  defaultValue={passwordGroupTwo}
                  onChange={(e) => setPasswordGroupTwo(e.target.value)}
                />
                <button
                  className='text-[25px] lg:text-[22.5px] lg:w-[33%] lg:ml-[auto] lg:mr-[auto] mt-10 rounded-xl border border-white hover:text-[#000000] hover:bg-white'
                  type='submit'
                  value='Send'
                >
                  {content.contactSend}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* {showGdpr && <Gdpr language={language} content={content} />} */}
    </>
  )
}

export default ContactForm
