import React, {} from 'react'
import StatusTag from './index'

export default {
  title: 'StatusTag',
  component: StatusTag,
}

export const Deprecated = () => (
<StatusTag variant= 'deprecated'>deprecated</StatusTag>
)
export const Stable = () => (
  <StatusTag variant= 'stable'>stable</StatusTag>
)
export const Experimental = () => (
  <StatusTag variant= 'experimental'>experimental</StatusTag>
)