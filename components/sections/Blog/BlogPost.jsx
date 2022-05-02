import React from 'react'
import Link from 'next/link'
import { formatDate } from '../../../utils/helpers'

function BlogPost ({ title, image, author, extract, link, date }) {
  return (
    <React.Fragment>
      <Link href={link}>
        <a className='post__link'>
          <div className='post__image-wrapper'>
            <img
              width='400'
              height='300'
              className='post__image'
              alt={title}
              src={image || 'https://picsum.photos/400/300'}
            />
          </div>
        </a>
      </Link>
      <Link href={link}>
        <a className='post__link'>
          <h2 className='post__title'>{title}</h2>
        </a>
      </Link>
      <span className='post__about'>
        By <strong>{author}</strong> - {formatDate(date)}
      </span>
      <p>{extract}</p>
    </React.Fragment>
  )
}

export default BlogPost
