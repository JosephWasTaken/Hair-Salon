import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <div>
        <p>What's up?</p>
      </div>
    </>
  )
}

export default Contact
