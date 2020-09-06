import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <Container>
        <Typography>Created by {data.site.siteMetadata.author}</Typography>
      </Container>
    </footer>
  )
}

export default Footer