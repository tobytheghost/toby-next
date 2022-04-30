import React, { useState, useEffect } from 'react'
import { scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
// import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
const Stars = dynamic(() => import('../Stars/Stars'), {
  ssr: false
})

function Hero () {
  const scrollToSection = () => {
    scroller.scrollTo('section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  const [orbit, setOrbit] = useState(false)

  const toggleOrbit = () => {
    setOrbit(orbit => !orbit)
  }

  return (
    <section className='hero'>
      <Stars orbit={orbit} />
      {!orbit ? (
        <div className='hero__content'>
          <h1>
            <span className='hero__title'>
              Hi, I'm
              <span className='hero__title--alternative'> Toby Gates</span>.
            </span>
            <span className='hero__subtitle'>
              I'm a full-stack web developer.
            </span>
          </h1>
          <div className='hero__buttons'>
            <button className='hero__button' onClick={scrollToSection}>
              My Work
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className='hero__content'>
          <div className='hero__subtitle'>Drag to explore space!</div>
        </div>
      )}
      <button
        className='hero__orbit'
        onClick={toggleOrbit}
        aria-label='Orbit 3D Background'
      >
        <ThreeDRotationIcon />
      </button>
    </section>
  )
}

export default Hero
