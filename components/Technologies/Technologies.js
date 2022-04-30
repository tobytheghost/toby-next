import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'
import { Card } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Technologies () {
  const [isVisible, setVisibility] = useState(false)
  const [entered, setEntered] = useState(false)
  const animate = entered ? 'show' : 'hidden'

  const createVariants = delay => {
    return {
      hidden: {
        opacity: 0,
        y: -100
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay || 0.3
        }
      }
    }
  }

  useEffect(() => {
    if (!isVisible) return
    return setEntered(true)
  }, [isVisible])

  return (
    <section className='section technologies section--background-grey'>
      <VisibilitySensor partialVisibility onChange={setVisibility}>
        {() => (
          <article className='section__container'>
            <motion.h2
              className='section__title'
              variants={createVariants(0.3)}
              initial='hidden'
              animate={animate}
            >
              My Tech
            </motion.h2>
            <motion.div
              className='section__cards section__cards--full'
              variants={createVariants(0.45)}
              initial='hidden'
              animate={animate}
            >
              <IconTile
                title='Javascript'
                iconType='fab'
                icon='js-square'
                color='#ff9800'
              />
              <IconTile
                title='React'
                iconType='fab'
                icon='react'
                color='#2196f3'
              />
              <IconTile
                title='CSS'
                iconType='fab'
                icon='css3'
                color='#2196f3'
              />
              <IconTile
                title='HTML5'
                iconType='fab'
                icon='html5'
                color='#ff9800'
              />
              <IconTile
                title='Sass (Scss)'
                iconType='fab'
                icon='sass'
                color='#f48fb1'
              />
              <IconTile
                title='Less'
                iconType='fab'
                icon='less'
                color='#2196f3'
              />
              <IconTile
                title='Git'
                iconType='fab'
                icon='git-alt'
                color='#f44336'
              />
              <IconTile
                title='Node'
                iconType='fab'
                icon='node-js'
                color='#4caf50'
              />
              <ImageTile title='VS Code' image='/assets/img/code.jpg' />
              <ImageTile title='Next' image='/assets/img/next.png' />
              <ImageTile title='Jest' image='/assets/img/jest-icon.png' />
              <ImageTile title='MySQL' image='/assets/img/mysql.png' />
              <IconTile title='PHP' iconType='fab' icon='php' color='#f48fb1' />
              <IconTile
                title='WordPress'
                iconType='fab'
                icon='wordpress'
                color='#2196f3'
              />
              <ImageTile
                title='WooCommerce'
                image='/assets/img/woocommerce.webp'
              />
              <IconTile
                title='Docker'
                iconType='fab'
                icon='docker'
                color='#2196f3'
              />
            </motion.div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  )
}

function IconTile ({ title, iconType, icon, color, fontSize }) {
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

export default Technologies
