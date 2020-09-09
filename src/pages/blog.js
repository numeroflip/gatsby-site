import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const BlogGrid = styled.div`
  display: grid;
`

const Post = styled.div`
`

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
              title
              publishedDate (formatString: "MMMM Do, YYYY")
              slug
          }
        }
      }
    }
  `)


  const posts = data.allContentfulBlogPost.edges.map(edge => ({
    title: edge.node.title,
    date: edge.node.publishedDate,
    slug: edge.node.slug
  }))
  

  return (
    <Layout >
      <h1>Blog</h1>
      <BlogGrid>
        {
          posts.map((post, i) => (
            <Link key={'blog-post-'+i} to={`/blog/${post.slug}`}>
              <Post >
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Post>
            </Link>
          ))
        }
      </BlogGrid>
    </Layout>
  )
}

export default BlogPage