import React, { useState, useEffect, useRef } from 'react'
import { scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
// import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'

const Stars = dynamic(() => import('../Stars/Stars'), {
  ssr: false
})

const CONTENT = [
  'a Front-End Engineer.',
  'a problem solver.',
  'an out-of-the-box thinker.',
  'a board game geek.',
  'a food lover.',
  'a traveller.',
]

function Hero () {
  const typewriter = useRef()
  const cursor = useRef()

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

  useEffect(() => {
    if (!typewriter || !typewriter.current) return

    let interval = setInterval(typeText, 100)
    let textState = 0
    let partIndex = 0

    function typeText () {
      const text = CONTENT[textState].substring(0, partIndex + 1)
      typewriter.current.innerHTML = text
      partIndex++

      if (text === CONTENT[textState]) {
        clearInterval(interval)
        setTimeout(() => (interval = setInterval(deleteText, 50)), 1000)
      }
    }

    function deleteText () {
      const text = CONTENT[textState].substring(0, partIndex - 1)
      typewriter.current.innerHTML = text
      partIndex--

      if (text === '') {
        clearInterval(interval)
        if (textState == CONTENT.length - 1) {
          textState = 0
        } else {
          textState++
        }
        partIndex = 0
        setTimeout(() => {
          interval = setInterval(typeText, 100)
        }, 200)
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

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
              I'm <span ref={typewriter}>a Front-End Engineer.</span>
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
