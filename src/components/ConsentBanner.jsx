import { useState, useEffect } from 'react'

const ConsentBanner = ({ 
  text, 
  buttonText, 
  declineText,
  onAccept, 
  onDecline,
  style = {},
  buttonStyle = {},
  declineButtonStyle = {}
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    if (onAccept) {
      onAccept()
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
    if (onDecline) {
      onDecline()
    }
  }

  if (!isVisible) {
    return null
  }

  const defaultStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#782777',
    color: '#d7cde6',
    fontSize: '16px',
    textAlign: 'start',
    padding: '16px',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    ...style
  }

  const defaultButtonStyle = {
    background: '#1d9f2f',
    color: '#fff',
    fontSize: '16px',
    padding: '7px 14px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '8px',
    ...buttonStyle
  }

  const defaultDeclineButtonStyle = {
    background: '#666',
    color: '#fff',
    fontSize: '16px',
    padding: '7px 14px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '8px',
    ...declineButtonStyle
  }

  return (
    <div style={defaultStyle}>
      <div style={{ marginBottom: '8px' }}>
        {text}
      </div>
      <div>
        <button style={defaultButtonStyle} onClick={handleAccept}>
          {buttonText}
        </button>
        {declineText && (
          <button style={defaultDeclineButtonStyle} onClick={handleDecline}>
            {declineText}
          </button>
        )}
      </div>
    </div>
  )
}

export default ConsentBanner