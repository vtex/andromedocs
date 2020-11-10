/** @jsx jsx */
import { jsx } from 'theme-ui'
import Default from './liveCodeScope'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const LiveCode = ({ scope = {}, code }: Props) => (
  <LiveProvider scope={{ ...Default, scope }} code={code}>
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
