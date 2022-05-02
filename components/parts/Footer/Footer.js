import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import VisibilitySensor from 'react-visibility-sensor'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'

function Footer () {
  const scrollToSection = () => {
    scroll.scrollToTop()
  }

  const [isVisible, setVisibility] = useState(false)

  const handleOnChange = visibility => {
    setVisibility(visibility)
  }

  return (
    <VisibilitySensor partialVisibility onChange={handleOnChange}>
      {() => (
        <>
          <section className='section footer'>
            <div className='footer__links'>
              <ul className='footer__items'>
                <FooterItem
                  href='https://www.linkedin.com/in/tobygates/'
                  text='LinkedIn'
                  icon={<LinkedInIcon />}
                />
                <FooterItem
                  href='https://github.com/tobytheghost/'
                  text='Github'
                  icon={<GitHubIcon />}
                />
                <FooterItem
                  href='https://www.facebook.com/tobytheghost'
                  text='Facebook'
                  icon={<FacebookIcon />}
                />
              </ul>
            </div>
            <div className='footer__copy'>
              Website Design & Build - Toby Gates - {new Date().getFullYear()}
            </div>
          </section>
        </>
      )}
    </VisibilitySensor>
  )
}

function FooterItem ({ href, text, icon }) {
  return (
    <li className='footer__item'>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <span>{text}</span>
        {icon}
      </a>
    </li>
  )
}

export default Footer
