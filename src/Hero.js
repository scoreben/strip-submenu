import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  
  return (
  
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
       <h1> Socialist Republics</h1>
          <p>
            was a socialist state that spanned Eurasia during its existence from 1922 to 1991.
            It was nominally a federal union of multiple national republics;[q]in practice its
            government and economy were highly centralized until its final years.
            The country was a one-party state (prior to 1990) governed 
            by the Communist Party of the Soviet Union, with Moscow as its 
             
       </p>
<button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'  ></img>
        </article>
      </div>
      
     </section>
  )
}

export default Hero
