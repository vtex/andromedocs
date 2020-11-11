import React from 'react'

import LiveCode from './index'
import StatusTag from '../StatusTag'

export default {
  title: 'LiveCode',
  component: LiveCode,
}

export const Default = () => (
  <LiveCode scope={{ StatusTag }} code={`<StatusTag variant = 'stable'/>`} />
)
