import React from 'react'

const genH1 = text => `
<h1 style="background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); -webkit-background-clip: text; background-clip: text; color: transparent;">${text}</h1>`.trim()

const RainbowText = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: genH1(text) }} />
}

export default RainbowText