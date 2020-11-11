/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import defaultScope from './liveCodeScope'

export const LiveCode = ({ scope = {}, code }: Props) => (
  <LiveProvider scope={{ ...defaultScope, ...scope }} code={code}>
    <LiveEditor
      sx={{
        bg: 'secondary.base',
        borderRadius: '2',
        marginBottom: '4',
      }}
    />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

interface Props {
  scope?: object
  code: string
}

export default LiveCode
