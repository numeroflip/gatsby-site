import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../index.css'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: auto;
`

const Container = styled.div`
display: gird;
align-items: center;
justify-items: center;
width: 100%;
max-width: 900px;
margin: 0 auto;
padding: 1rem;
`




const Layout = ({children}) => (
  <StyledLayout>
    <Header />
    <Container>
      {children}
    </Container>
      <Footer />
  </StyledLayout>
)

export default Layout