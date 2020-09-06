import { ThemeProvider } from '@material-ui/core/styles'
import theme from './src/theme'
import React from 'react'


export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
)