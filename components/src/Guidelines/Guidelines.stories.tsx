import React from 'react'
import Guidelines from './index'

export default {
  title: "Guidelines",
  component: Guidelines
} 

export const GuidelinesList = () => (
  <Guidelines>
    <Guidelines.Dos icon={'✅'} title="Dos">
      <li>Do this!</li>
      <li>Do that!</li>
    </Guidelines.Dos>
    <Guidelines.Donts icon={'❌'} title="Dont's">
      <li>NEVER do this!</li>
      <li>NEVER do that!</li>
    </Guidelines.Donts>
  </Guidelines>
)
