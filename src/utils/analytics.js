export const loadUmamiScript = () => {
  const consent = localStorage.getItem('cookieConsent')
  
  if (consent === 'accepted') {
    // Check if script already exists
    const existingScript = document.querySelector('[data-website-id="c1814c2c-dd41-42bd-aa27-9f0d55a48545"]')
    
    if (!existingScript) {
      const script = document.createElement('script')
      script.defer = true
      script.src = 'https://umami-p00gs00gwcwo00s4k4c4kgg8.pictusweb.com/script.js'
      script.setAttribute('data-website-id', 'c1814c2c-dd41-42bd-aa27-9f0d55a48545')
      document.head.appendChild(script)
    }
  }
}

export const checkConsentAndLoadAnalytics = () => {
  loadUmamiScript()
}