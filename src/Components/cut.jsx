import React from 'react'

const cut = ({ img, title, info, price }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='1000' className='cut-container'>
      <img src={img} />
      <div className='cut-info'>
        <h1>{title}</h1>
        <p>{info}</p>
        <h2>Price: {price}</h2>
      </div>
    </div>
  )
}

export default cut
