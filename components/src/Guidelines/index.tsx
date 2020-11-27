/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx, Flex, Divider, Box, Text as ThemeUIText } from 'theme-ui'

const Guidelines = ({ children }: GuidelinesProps) => <Box>{children}</Box>

const Dos = ({ children, icon = '✅', title = 'Dos' }: Props) => (
  <GuidelinesList icon={icon} title={title}>
    {children}
  </GuidelinesList>
)

const Donts = ({ children, icon = '❌', title = 'Donts' }: Props) => (
  <GuidelinesList icon={icon} title={title}>
    {children}
  </GuidelinesList>
)

const GuidelinesList = ({ children, icon, title }: Props) => {
  return (
    <Box variant="guidelines.list">
      <Flex sx={{ alignItems: 'center' }}>
        {icon}
        <ThemeUIText as="h3" variant="guidelines.titles">
          {title}
        </ThemeUIText>
      </Flex>
      <Box sx={{ listStyleType: 'none', paddingLeft: '28px', marginTop: 3 }}>
        {children.map((child, index) => (
          <Box key={index}>
            {child}
            <Divider variant="guidelines.divider" />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

interface Props {
  children: ReactNode[]
  icon?: ReactNode
  title: string
}

export interface GuidelinesProps {
  children?: ReactNode
}

Guidelines.Dos = Dos
Guidelines.Donts = Donts

export default Guidelines
