import React, { ReactNode } from 'react'
import { ThemeProvider as BaseProvider } from 'theme-ui'

import { theme } from './theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <BaseProvider theme={theme}>{children}</BaseProvider>
)
