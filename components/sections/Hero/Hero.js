import React, { useState, useRef } from 'react'
import { scroller } from 'react-scroll'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import dynamic from 'next/dynamic'
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation'
import useTypewriter from '../../../hooks/useTypewriter'

const Stars = dynamic(() => import('../../parts/Stars/Stars'), {
  ssr: false
})

function Hero () {
  const [orbit, setOrbit] = useState(false)
  const typewriter = useRef()
  const toggleOrbit = () => setOrbit(orbit => !orbit)

  const content = [
    'a Front-End Engineer.',
    'a problem solver.',
    'an out-of-the-box thinker.',
    'a board game geek.',
    'a food lover.',
    'a traveller.',
  ]

  const scrollToSection = () => {
    scroller.scrollTo('section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  useTypewriter(typewriter, content)

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
