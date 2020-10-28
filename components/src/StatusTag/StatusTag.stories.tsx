import React from 'react'
import StatusTag from './index'

export default {
  title: 'StatusTag',
  component: StatusTag,
}

export const Deprecated = () => <StatusTag variant="deprecated" />
export const Stable = () => <StatusTag variant="stable" />
export const Experimental = () => <StatusTag variant="experimental" />
