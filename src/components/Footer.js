import React from 'react'
import Typography from '@material-ui/core/Typography'
import {graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  text-align: center;
  margin: 1rem;
  margin-top: auto;
  font-size: 0.8rem;
`

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
    <FooterWrapper>
        <Typography>Created by {data.site.siteMetadata.author}</Typography>
    </FooterWrapper>
  )
}

export default Footer