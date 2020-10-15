import React from 'react'
import { ThemeProvider } from '../src/theme'

const themeDecorator = (Story: any) => <ThemeProvider><Story /></ThemeProvider>

export default themeDecorator
