import React, { ReactNode } from 'react'
import { Flex, Box, Styled, Text as ThemeUIText } from 'theme-ui'

export const Guidelines = ({ children }: Prop) => (
    <Box>
        {children}
    </Box>
)

const Dos = ({ children, icon = '✅', title = 'Dos' }: Props) => (

    <GuidelinesList icon={icon} title={title} children={children}/>
)

const Donts = ({ children, icon = '❌', title = 'Donts' }: Props) => (

    <GuidelinesList icon={icon} title={title} children={children}/>
)

const GuidelinesList = ({ children, icon, title }: Props) => (

    <Box
        sx={{
            fontFamily: 'sans serif',
            lineHeight: 2,

        }}>
        <Flex>
            {icon}
            <ThemeUIText as="h3"
                sx={{
                    textTransform: 'uppercase',
                    marginLeft: '0.5rem'
                }}>
                {title}
            </ThemeUIText>
        </Flex>
        <Styled.ul>
            {children}
        </Styled.ul>
    </Box>
)

interface Props {
    children?: ReactNode
    icon?: ReactNode
    title: string
}

interface Prop {
    children?: ReactNode
}

Guidelines.Dos = Dos
Guidelines.Donts = Donts

export default Guidelines