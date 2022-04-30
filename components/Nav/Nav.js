import React, { useState } from 'react'
import { Events } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'

function Nav () {
  const [menuActive, setMenuActive] = useState(false)
  const router = useRouter()
  const isActive = menuActive ? ' nav--active' : ''
  const isHome = router.pathname === '/' ? ' nav--home' : ''
  const className = `nav${isActive}${isHome}`

  Events.scrollEvent.register('begin', () => {
    setMenuActive(false)
  })

  function NavItem ({ href, text }) {
    const handleNavOnClick = () => setMenuActive(false)
    return (
      <li className='nav__item'>
        <Link href={href}>
          <a className='nav__link' onClick={handleNavOnClick}>
            {text}
          </a>
        </Link>
      </li>
    )
  }

  function SocialItem ({ href, text, icon }) {
    return (
      <li className='social__item'>
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='nav__link'
        >
          <span className='nav__label'>{text}</span>
          {icon}
        </a>
      </li>
    )
  }

  function MenuButton () {
    const handleButtonOnClick = () =>
      menuActive ? setMenuActive(false) : setMenuActive(true)
    return (
      <button className='nav__button' onClick={handleButtonOnClick}>
        <span />
      </button>
    )
  }

  return (
    <section className={className}>
      <nav className='nav__container'>
        <ul className='nav__items'>
          <NavItem text='Home' href='/' />
          <NavItem text='Blog' href='/web-development-blog' />
          <NavItem text='Contact' href='/contact' />

          <li className='nav__item'>
            <ul className='social'>
              <SocialItem
                text='LinkedIn'
                href='https://www.linkedin.com/in/tobygates/'
                icon={<LinkedInIcon />}
              />
              <SocialItem
                text='Github'
                href='https://github.com/tobytheghost/'
                icon={<GitHubIcon />}
              />
              <SocialItem
                text='Facebook'
                href='https://www.facebook.com/tobytheghost'
                icon={<FacebookIcon />}
              />
            </ul>
          </li>
        </ul>
      </nav>
      <div className='nav__icon'>
        <MenuButton menuActive={menuActive} />
      </div>
      <Link href='/'>
        <a onClick={() => setMenuActive(false)}>
          <span className='nav__title'>Toby Gates.</span>
        </a>
      </Link>
    </section>
  )
}

export default Nav
