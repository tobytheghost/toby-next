import React, { useState, useEffect } from 'react'
import { frontMatter as blogPosts } from '../pages/web-development-blog/**/*.mdx'

const useBlogs = (limit = false) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!blogPosts || !blogPosts.length) return

    const blogs = blogPosts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(frontMatter => {
        if (!frontMatter.title || !frontMatter.date) return
        const { __resourcePath, ...props } = frontMatter
        const link = `/${__resourcePath.replaceAll('\\', '/').split('.')[0]}`
        return { ...props, link }
      })

    if (limit) return setPosts(blogs.slice(0, limit))
    return setPosts(blogs)
  }, [blogPosts, limit])

  return posts
}

export default useBlogs
