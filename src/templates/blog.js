import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const query = graphql`
query ($slug: String!) {
  markdownRemark (fields: {slug: {eq: $slug}}) {
   frontmatter {
      date
      title
    }
    html
  }
}
`
const Blog = ({data}) => {
  const blogData = data.markdownRemark
  return (
    <Layout>
      <h1>{blogData.frontmatter.title}</h1>
      <p>{blogData.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blogData.html}}></div>
    </Layout>
  )
}

export default Blog