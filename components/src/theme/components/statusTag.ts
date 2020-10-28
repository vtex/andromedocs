const statusTag = {
  color: 'muted.5',
  borderRadius: '50px',
  height: '22px',
  paddingX: '12px',
  textTransform: 'uppercase',
  lineHeight: '10px',
  fontSize: '13px',
}

export default {
  stable: {
    ...statusTag,
    bg: 'success.base',
  },
  deprecated: {
    ...statusTag,
    bg: 'muted.1',
  },
  experimental: {
    ...statusTag,
    bg: 'warning.base',
  },
}