
import React, { ReactNode } from 'react'
import { Badge, Flex } from 'theme-ui'


const StatusTag = ({children, variant}: Prop) => {
    return (
    <Badge variant= {`statusTag.${variant}`}><Flex sx= {{alignItems: 'center' , height: '100%'}}>{children}</Flex></Badge>
)}

interface Prop {
  children?: ReactNode
  variant: 'stable'|'deprecated' |'experimental'
}


export default StatusTag
