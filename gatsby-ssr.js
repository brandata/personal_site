import React from 'react'

exports.onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <title key="title">Brandon Haw</title>,
    <link key="icon" rel="icon" href="/favicon.png" />
  ])