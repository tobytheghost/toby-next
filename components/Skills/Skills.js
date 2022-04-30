import React, { useState, useEffect } from 'react'

import VisibilitySensor from 'react-visibility-sensor'
import { motion, AnimatePresence } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)

const createSkill = (title, progress, subskills, icon, color) => {
  return {
    title,
    progress,
    subskills,
    icon,
    color
  }
}

const mySkills = [
  createSkill('HTML', 100, [], ['fab', 'html5'], '#ff9800'),
  createSkill(
    'CSS',
    95,
    [
      createSkill('BEM', 100, [], [], '#f48fb1'),
      createSkill('SCSS', 70, [], ['fab', 'sass'], '#f48fb1'),
      createSkill('LESS', 70, [], ['fab', 'less'], '#f48fb1')
    ],
    ['fab', 'css3'],
    '#ff9800'
  ),
  createSkill(
    'JS',
    95,
    [
      createSkill('React', 80, [], ['fab', 'react'], '#f48fb1'),
      createSkill('Next', 60, [], [], '#f48fb1'),
      createSkill('Typescript', 60, [], [], '#f48fb1'),
      createSkill('Vue', 20, [], ['fab', 'vuejs'], '#f48fb1')
    ],
    ['fab', 'js-square'],
    '#ff9800'
  ),
  createSkill('PHP', 90, [], ['fab', 'php'], '#f48fb1'),
  createSkill('Git', 80, [], ['fab', 'git-alt'], '#f48fb1'),
  createSkill('SQL', 70, [], [], '#f48fb1')
]

const Skills = () => {
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
    <section className='section skills'>
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className='section__container'>
            <motion.h2
              className='section__title technologies__title'
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
              My Skills
            </motion.h2>
            <motion.div
              className='skills__bars'
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
              {mySkills.map((s, index) => (
                <Skill key={s.title} index={index} {...s} />
              ))}
            </motion.div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  )
}

function Skill ({ title, icon, color, subskills, progress, index }) {
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
    <React.Fragment>
      <div className='skill'>
        <VisibilitySensor partialVisibility onChange={handleOnChange}>
          {() => (
            <div className='skill__bar'>
              <div className='skill__thumb'>
                <div className='skill__title'>{title}</div>
                <div className='skill__icon'>
                  {icon.length ? (
                    <FontAwesomeIcon
                      icon={icon}
                      style={{ color, fontSize: '2rem' }}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className='skill__progress'>
                <motion.div
                  className='skill__complete'
                  style={{ background: color, width: `${progress}%` }}
                  variants={{
                    hidden: {
                      width: 0
                    },
                    show: {
                      width: `${progress}%`,
                      transition: {
                        delay: (0.3 * index) + 0.3
                      }
                    }
                  }}
                  initial='hidden'
                  animate={entered ? 'show' : 'hidden'}
                />
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
      <div className='skill__sub-skills'>
        {subskills && subskills.length
          ? subskills.map(s=> <Skill key={s.title} index={index} {...s} />)
          : ''}
      </div>
    </React.Fragment>
  )
}

export default Skills
