import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../index.css'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 1200px;
margin: 0 auto;
padding: 1rem;
`




const Layout = ({children}) => (
  <StyledLayout>
    <Header />
    <Container>
      {children}
    </Container>
    <Container style={{marginTop: 'auto'}}>
      <Footer />
    </Container>
  </StyledLayout>
)

export default Layout