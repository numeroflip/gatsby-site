import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const BlogGrid = styled.div`
  display: grid;
`

const Post = styled.div`
`

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)


  const posts = data.allMarkdownRemark.edges.map(edge => ({
    title: edge.node.frontmatter.title,
    date: edge.node.frontmatter.date
  }))
  

  return (
    <Layout >
      <h1>Blog</h1>
      <BlogGrid>
        {
          posts.map((post, i) => (
            <Post key={'blog-post-'+i}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Post>
          ))
        }
      </BlogGrid>
    </Layout>
  )
}

export default BlogPage