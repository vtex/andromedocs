import React, { ReactNode } from 'react'
import { Styled, Text as ThemeUIText } from 'theme-ui'
import { Box } from 'theme-ui'

export const Guidelines = ({ children }: ListProp) => (
    <Box>
        {children}
    </Box>
)

const Dos = ({ children, title, icon }: ListProps) => (
    <ThemeUIText
        sx={{
            fontFamily: 'sans serif',
            lineHeight: 2,
            letterSpacing: 1,

        }}>

        <ThemeUIText as="h3">{icon}{title}</ThemeUIText>
        <Styled.ul>
            {children}
        </Styled.ul>

    </ThemeUIText>
)

const Donts = ({ children, title, icon }: ListProps) => (
    <ThemeUIText
        sx={{
            fontFamily: 'sans serif',
            lineHeight: 2,
            letterSpacing: 1,
        }}>

        <ThemeUIText as="h3">{icon}{title}</ThemeUIText>
        <Styled.ul>
            {children}
        </Styled.ul>

    </ThemeUIText>
)

interface ListProps {
    children: ReactNode
    icon: ReactNode
    title: string
}

interface ListProp {
    children: ReactNode

}

Guidelines.Dos = Dos
Guidelines.Donts = Donts

export default Guidelines