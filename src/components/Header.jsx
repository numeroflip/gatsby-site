import React from 'react';
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'



const AppBar = styled.header`
padding : 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const Logo = styled.div`
margin: 1rem;
  a {
    color: black;
    font-size: 1.3rem;
    text-decoration: none;
    padding: 1rem;
    font-weight: 600;
  }

`

const LinkWrapper = styled.ul`
padding: 0;
list-style: none;
display: grid;
grid-auto-flow: column;
grid-gap: 1rem;
align-items: center;
justify-items: center;
margin: 0;

.active {
  background-color: rgba(0,0,0,0.05);
}

a {
  color: black;
  text-decoration: none;
  padding: .6rem 1rem;
  border-radius: 6px;
  transition: ease-out .2s all;

  &:hover {
    background-color: rgba(0,0,0,0.05);
  }
}

`

const linkList = [
  {name: 'Blog', dest: '/blog'},
  {name: 'Contact', dest: '/contact'},
  {name: 'About me', dest: '/about'}
]


export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppBar>
    <Logo><Link to='/'>{data.site.siteMetadata.title}</Link></Logo>
      <LinkWrapper>
        {linkList.map(link => (<Link activeClassName='active' key={'topbar-link'+link.dest} to={link.dest}>{link.name}</Link>))}
      </LinkWrapper>
    </AppBar>
  );
}