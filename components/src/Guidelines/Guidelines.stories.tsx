import React from 'react'
import Guidelines from './index'



export const GuidelineExample = () => (
  <Guidelines>
    <Guidelines.Dos icon= {'✅'} title="DOS">
      <li>Do this!</li>
      <li>Do that!</li>
    </Guidelines.Dos>
    <Guidelines.Donts icon={'❌'} title="DON'TS">
      <li>NEVER do this!</li>
      <li>NEVER do that!</li>
    </Guidelines.Donts>
  </Guidelines>
  
)




export default {
  title: "guidelines",
  component: Guidelines
}