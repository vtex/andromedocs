import React from 'react'
import LiveCode from './index'
import scope from './liveCodeScope'

export default {
  title: 'LiveCode',
  component: LiveCode,
}

export const LiveCodes = () => (
  <LiveCode scope={scope} code={`<StatusTag variant = 'stable'/>`} />
)
