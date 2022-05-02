import React, { useState, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'

const hidden = {
  opacity: 0,
  y: -100
}
const show = {
  opacity: 1,
  y: 0
}

function Section ({ title, children, layout, className, posts }) {
  const sectionClass = 'section'
  const [isVisible, setVisibility] = useState(false)
  const [entered, setEntered] = useState(false)
  const handleOnChange = visibility => setVisibility(visibility)
  const animate = entered ? 'show' : 'hidden'

  useEffect(() => {
    if (isVisible) setEntered(true)
  }, [isVisible])

  return (
    <section className={`${sectionClass} ${className}`}>
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className='section__container'>
            <SectionTitle sectionClass={sectionClass} animate={animate}>
              {title}
            </SectionTitle>
            <SectionBody
              sectionClass={sectionClass}
              animate={animate}
              layout={layout}
              posts={posts}
            >
              {children}
            </SectionBody>
          </article>
        )}
      </VisibilitySensor>
    </section>
  )
}

function SectionTitle ({ sectionClass, children, animate }) {
  const titleVariants = {
    hidden,
    show: {
      ...show,
      transition: 0.3
    }
  }
  return (
    <motion.h2
      className={`${sectionClass}__title`}
      variants={titleVariants}
      initial='hidden'
      animate={animate}
    >
      {children}
    </motion.h2>
  )
}

function SectionBody ({ sectionClass, children, animate, layout, posts }) {
  const bodyVariants = {
    hidden,
    show: {
      ...show,
      transition: 0.45
    }
  }

  if (layout && layout == 'two-columns') {
    return (
      <div className={`${sectionClass}__row ${sectionClass}__row--align-top`}>
        <motion.div
          className={`${sectionClass}__column`}
          variants={bodyVariants}
          initial='hidden'
          animate={animate}
        >
          {children[0]}
        </motion.div>

        <motion.div
          className={`${sectionClass}__column`}
          variants={bodyVariants}
          initial='hidden'
          animate={animate}
        >
          {children[1]}
        </motion.div>
      </div>
    )
  }

  if (layout && layout === 'post-list') {
    if (!posts || !posts.length) return ''
    return (
      <div className={`posts ${sectionClass}__row`}>
        {posts.map((child, i) => {
          const delay = i * 0.15 + 0.3
          const variants = {
            hidden,
            show: {
              ...show,
              transition: {
                delay
              }
            }
          }
          return (
            <motion.div
              className='post'
              key={child.props.title}
              variants={variants}
              initial='hidden'
              animate={animate}
              custom={delay}
            >
              {child}
            </motion.div>
          )
        })}
        {children}
      </div>
    )
  }

  return ''
}

export default Section
