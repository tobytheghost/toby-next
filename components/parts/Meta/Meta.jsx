import React from 'react'
import Head from 'next/head'

const Meta = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title} | Toby Gates</title>
      <meta name='theme-color' content='#ff9800' />
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={meta.description} />
      <link rel='canonical' href={meta.canonical}></link>
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={`${meta.title} | Toby Gates`} />
      <meta property='og:title' content='Toby Gates - Web Developer' />
      <meta property='og:url' content={meta.canonical} />
      <meta property='og:description' content={meta.description} />
      <meta
        property='og:image'
        content='https://tobygates.co.uk/assets/img/toby-gates.png'
      />
      <meta name='twitter:site' content='https://tobygates.co.uk/' />
      <meta name='twitter:title' content='Toby Gates - Web Developer' />
      <meta name='twitter:url' content={meta.canonical} />
      <meta name='twitter:description' content={meta.description} />
      <meta
        name='twitter:image'
        content='https://tobygates.co.uk/assets/img/toby-gates.png'
      />
    </Head>
  )
}

export default Meta
