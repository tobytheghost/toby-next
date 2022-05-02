import React from 'react'
import Link from 'next/link'
import Section from '../Section/Section'
import useBlogs from '../../../hooks/useBlogs'
import BlogPost from './BlogPost'

function BlogSection () {
  const limit = 3
  const posts = useBlogs(limit)

  return (
    <Section
      className={'blog'}
      title={'Blog'}
      layout={'post-list'}
      posts={posts.map(post => (
        <BlogPost {...post} />
      ))}
    >
      <Link href='/web-development-blog'>
        <a className='section__button'>Check out my other articles!</a>
      </Link>
    </Section>
  )
}

export default BlogSection
