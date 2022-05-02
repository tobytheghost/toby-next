import Meta from '../../components/parts/Meta/Meta'
import Section from '../../components/sections/Section/Section'
import BlogPost from '../../components/sections/Blog/BlogPost'
import useBlogs from '../../hooks/useBlogs'

const meta = {
  title: 'Web Development Blog - Web Developer',
  description:
    'Personal Blog by Toby Gates. My notes, thoughts, ideas & answers to frequently asked questions.',
  canonical: 'https://tobygates.co.uk/web-development-blog/'
}

const BlogPage = () => {
  const posts = useBlogs()

  return (
    <>
      <Meta meta={meta} />
      <Section
        className={'blog'}
        title={'Blog'}
        layout={'post-list'}
        posts={posts.map(post => (
          <BlogPost {...post} />
        ))}
      ></Section>
    </>
  )
}

export default BlogPage
