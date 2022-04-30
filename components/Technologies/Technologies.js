import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { motion, AnimatePresence } from 'framer-motion'

import { Card } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

function Tile ({ title, iconType, icon, color, fontSize }) {
  return (
    <Card className='align-center'>
      <div className='section__icons'>
        <FontAwesomeIcon
          icon={[iconType || 'fab', icon]}
          style={{ color: color || '#f48fb1', fontSize: fontSize || '4rem' }}
        />
      </div>
      <h3 className='technologies__title'>{title}</h3>
    </Card>
  )
}

function ImageTile ({ title, image }) {
  return (
    <Card className='align-center'>
      <div className='section__icons'>
        <img className='technologies__image' src={image} />
      </div>
      <h3 className='technologies__title'>{title}</h3>
    </Card>
  )
}

function Technologies () {
  const [isVisible, setVisibility] = useState(false)
  const [entered, setEntered] = useState(false)

  const handleOnChange = visibility => {
    setVisibility(visibility)
  }
  useEffect(() => {
    if (isVisible) {
      setEntered(true)
    }
  }, [isVisible])

  return (
    <section className='section technologies section--background-grey'>
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className='section__container'>
            <motion.h2
              className='section__title'
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
              My Tech
            </motion.h2>

            <motion.div
              className='section__cards section__cards--full'
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.45
                  }
                }
              }}
              initial='hidden'
              animate={entered ? 'show' : 'hidden'}
            >
              <Tile title='Javascript' iconType='fab' icon='js-square' color='#ff9800' />
              <Tile title='React' iconType='fab' icon='react' color='#2196f3' />
              <Tile title='CSS' iconType='fab' icon='css3' color='#2196f3' />
              <Tile title='HTML5' iconType='fab' icon='html5' color='#ff9800' />
              <Tile title='Sass (Scss)' iconType='fab' icon='sass' color='#f48fb1' />
              <Tile title='Less' iconType='fab' icon='less' color='#2196f3' />
              <Tile title='Git' iconType='fab' icon='git-alt' color='#f44336' />
              <Tile title='Node' iconType='fab' icon='node-js' color='#4caf50' />
              <ImageTile title='VS Code' image='/assets/img/code.jpg'/>
              <ImageTile title='Next' image='/assets/img/next.png'/>
              <ImageTile title='Jest' image='/assets/img/jest-icon.png'/>
              <ImageTile title='MySQL' image='/assets/img/mysql.png'/>
              <Tile title='PHP' iconType='fab' icon='php' color='#f48fb1' />
              <Tile title='WordPress' iconType='fab' icon='wordpress' color='#2196f3' />
              <ImageTile title='WooCommerce' image='/assets/img/woocommerce.webp'/>
              <Tile title='Docker' iconType='fab' icon='docker' color='#2196f3' />
{/* 
              <Card className='skill align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'js-square']}
                    style={{ color: '#ff9800', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>Javascript</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'wordpress']}
                    style={{ color: '#2196f3', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>WordPress</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'sass']}
                    style={{ color: '#f48fb1', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>Sass (Scss)</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    style={{ color: '#ff9800', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>HTML5</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'react']}
                    style={{ color: '#2196f3', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>React</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'git-alt']}
                    style={{ color: '#f44336', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>Git</h3>
              </Card>

              <Card className='align-center'>
                <div className='section__icons'>
                  <FontAwesomeIcon
                    icon={['fab', 'docker']}
                    style={{ color: '#2196f3', fontSize: '4rem' }}
                  />
                </div>
                <h3 className='skill__title'>Docker</h3>
              </Card> */}

              {/* <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                style={{ color: "#4caf50", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Node.js</h3>
          </Card> */}
            </motion.div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  )
}

export default Technologies
