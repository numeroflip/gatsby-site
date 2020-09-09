import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const query = graphql`
query ($slug: String!) {
  contentfulBlogPost (slug: {eq: $slug}) {  
      publishedDate(formatString: "MMMM Do, YYYY")
      title
    
  }
}
`
const Blog = ({data}) => {
  const blogData = data.contentfulBlogPost
  return (
    <Layout>
      <h1>{blogData.title}</h1>
      <p>{blogData.date}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: blogData.html}}></div> */}
    </Layout>
  )
}

export default Blog