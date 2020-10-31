import React, { ReactNode } from 'react'
import { Badge, Flex } from 'theme-ui'

const StatusTag = ({ children, variant }: Props) => (
  <Badge variant={`statusTag.${variant}`}>
    <Flex sx={{ alignItems: 'center', height: '100%' }}>
      {children ?? variant}
    </Flex>
  </Badge>
)

interface Props {
  children?: ReactNode
  variant: 'stable' | 'deprecated' | 'experimental'
}

export default StatusTag
