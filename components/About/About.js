import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import StorageIcon from '@material-ui/icons/Storage'
import LanguageIcon from '@material-ui/icons/Language'
import { Card } from '@material-ui/core'
import { motion } from 'framer-motion'

function About () {
  const [isVisible, setVisibility] = useState(false)
  const [entered, setEntered] = useState(false)
  const handleOnChange = visibility => setVisibility(visibility)

  useEffect(() => {
    if (isVisible) setEntered(true)
  }, [isVisible])

  return (
    <section className='section about'>
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className='section__container'>
            <motion.h2
              className='section__title about__title'
              variants={{
                hidden: {
                  opacity: 0,
                  y: -100
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3
                  }
                }
              }}
              initial='hidden'
              animate={entered ? 'show' : 'hidden'}
            >
              About
            </motion.h2>

            <div className='section__row section__row--align-top'>
              <motion.div
                className='section__column'
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -100
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.45
                    }
                  }
                }}
                initial='hidden'
                animate={entered ? 'show' : 'hidden'}
                // exit="hidden"
              >
                <div className='section__subtitle'>
                  <h3>Who am I?</h3>
                </div>
                <figure className='about__image'>
                  <img
                    width='250'
                    height='250'
                    src='../../assets/img/toby-gates.jpg'
                    alt='Toby Gates'
                  />
                </figure>
                <div className='section__content section__content--large'>
                  <p>
                    I'm a Front-End Engineer currently based in Bedfordshire,
                    UK.
                  </p>
                  <p>
                    I'm currently working on fast, responsive and secure web
                    applications and experiences in the Ecommerce, Travel and
                    E-Gaming sectors.
                  </p>
                </div>
              </motion.div>

              <motion.aside
                className='section__column'
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 100
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.45
                    }
                  }
                }}
                initial='hidden'
                animate={entered ? 'show' : 'hidden'}
              >
                <div className='section__subtitle'>
                  <h3>What do I do?</h3>
                </div>
                <div className='section__cards'>
                  <Card className='card'>
                    <CodeIcon />
                    <h4 className='card__title'>HTML5 / CSS3 / JS</h4>
                    <p>
                      Fast and dynamic web apps and experiences using the latest
                      frameworks.
                    </p>
                  </Card>
                  <Card className='card'>
                    <StorageIcon />
                    <h4 className='card__title'>Back-end Development</h4>
                    <p>
                      Work with powerful back-end REST Api services and create
                      Node.js integrations.
                    </p>
                  </Card>
                  <Card className='card'>
                    <LanguageIcon />
                    <h4 className='card__title'>Support</h4>
                    <p>
                      Provide support to clients with varying levels of
                      technological expertise.
                    </p>
                  </Card>
                  <Card className='card'>
                    <GitHubIcon />
                    <h4 className='card__title'>Best Practices</h4>
                    <p>
                      Use industry standards such as Git, CI/CD and Agile
                      development.
                    </p>
                  </Card>
                </div>
              </motion.aside>
            </div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  )
}

export default About
